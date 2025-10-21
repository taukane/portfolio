import { NavLink } from "react-router";
import{ useEffect, useRef, useCallback, useState } from "react";
import { useTranslation } from 'react-i18next';
import Nav from "./assets/Nav";
import Logo from "./assets/Logo.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, FreeMode, Keyboard, Pagination, Navigation, Thumbs, HashNavigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function App() {

    const { t } = useTranslation();
    
    const boxesRef = useRef([]);
    const [currentBox, setCurrentBox] = useState(0);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperRef = useRef(null);

    const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entry.target.classList.remove('is-leaving');
        } else {
            entry.target.classList.remove('is-visible');
            entry.target.classList.add('is-leaving');
        }
    });
}, {
    threshold: [0, 0.25, 0.5, 0.75, 1]
});

boxes.forEach(box => observer.observe(box));
    
const panels = [
    {id: 0, name: 'Website ', descricao:<p><a href="https://dombertolin.com.br" target="_blank" className="text-light">Dom Bertolin <small>/ SEO Performance</small></a></p>, src: ['image/bom-bertolin-website.png']},
    {id: 1, name: 'Website Interface + Desenvolvimento Laravel', descricao:<p>Mitsul / Mitsubishi <small>/ 2023</small></p>, src: ['image/mitsul.jpg']},
    {id: 2, name: 'Website Interface + Desenvolvimento Laravel', descricao:<p>Real Veiculos / Volkswagen <small>/ 2022</small></p>, src: ['image/Volkswagen-layout-site.png']},
    {id: 3, name: 'Website Interface + Desenvolvimento Laravel', descricao: <p>Honda <small>/ 2021</small></p>, src: ['image/honda-veiculos.jpg']},
    {id: 4, name: 'Website Interface + Desenvolvimento Wordpress', descricao: <p>Autoconf<small>/ 2021</small></p>, src: ['image/layout-blog-autoconf-v2-01.jpg']},
    {id: 5, name: 'Projeto Gráfico', descricao: <p>Desenvolvimento de embalagens Bulbo Led <small>/ 2020</small></p>, src: ['image/facas-embalagens.png']},
    {id: 6, name: 'Website Interface UI Design', descricao: <p>Lawww <small>/ 2018</small></p>, src: ['image/laww-layout-home-v2.webp']},
    {id: 7, name: 'Website Interface + Desenvolvimento Wordpress', descricao: <p>Black Club <small>/ 2018</small></p>, src: ['image/black-club-layout-v2.webp' ]},
    {id: 8, name: 'Website Interface UI Design', descricao:<p>Serro Carrocerias<small>/ 2018</small></p>, src: ['image/serro-carrocerias.webp']},
    {id: 9, name: 'Website Interface + Desenvolvimento Wordpress', descricao:<p>Sibras <small>/ 2018</small></p>, src: ['image/sibras-site.webp']},
    {id: 10, name: 'Direção de Arte Redes Sociais', descricao:<p>Roldão / Perini <small>/ 2017</small></p>, src: ['image/roldao-posts.webp', 'image/megamidia.webp', 'image/megamidia-3.webp']},
    {id: 11, name: 'Website Interface + Desenvolvimento Wordpress', descricao:<p>Probat Leogap <small>/ 2016</small></p>, src: ['image/probat-leogap-website-2017.jpg', 'image/probat-leogap-wireframe-2017.jpg', null]},
    {id: 12, name: 'Layout Landing Page', descricao:<p>Globo Renault Florianópolis <small>/ 2016</small></p>, src: ['image/landing-reanult-globo.jpg']},
    {id: 13, name: 'Branding', descricao:<p>Marmoraria Florianópolis <small>/ 2014</small></p>, src: ['image/marmoraria-florianopolis-2014.jpg']},
    {id: 14, name: 'Projeto Gráfico Jornal', descricao:<p>Jornal Independente <small>/ 2014</small></p>, src: ['image/jornal-independente-big.jpg']},
    {id: 15, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao:<p>Zeta Estaleiro <small>/ 2013</small></p>, src: ['image/zeta-estaleiro-redesign.jpg']},
    {id: 16, name: 'Projeto Gráfico Midia Kit', descricao:<p>Curitiba Cultura <small>/ 2013</small></p>, src: ['image/curitiba-cultura.jpg']},
    {id: 17, name: 'Direção de Arte Redes Sociais', descricao:<p>Shopping Total <small>/ 2012</small></p>, src: ['image/shopping-total.webp', 'image/shopping-total.jpg', null]},
    {id: 18, name: 'Direção de Arte Redes Sociais e Email Marketing', descricao:<p>Volvo CE <small>/ 2012</small></p>, src: ['image/volvo-facebook-2012.jpg','image/volvo-2012.jpg', 'image/volvo-2012-posts.jpg']},
    {id: 19, name: 'Direção de Arte Apresentação', descricao:<p>Boticário <small>/ 2012</small></p>, src: ['image/boticario.jpg', 'image/boticario-2.jpg', 'image/boticario-3.jpg']},
    {id: 20, name: 'Direção de Arte Web', descricao:<p>Gazeta do Povo <small>/ 2010</small></p>, src: ['image/gazeta.webp']},
];

const thumbis = [
    {id: 0, name: 'Website', src: 'image/dombertolin-thumb.jpg'},
    {id: 1, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/mitsul-thumb.jpg'},
    {id: 2, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/volks-thumb.jpg'},
    {id: 3, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/honda-thumb.jpg'},
    {id: 4, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/autoconf-thumb.jpg'},
    {id: 5, name: 'Projeto Gráfico', src: 'image/facas-embalagens-thumb.jpg'},
    {id: 6, name: 'Website Interface', src: 'image/laww-thumb.jpg'},
    {id: 7, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/blackclub-thumb.png'},
    {id: 8, name: 'Website Interface', src: 'image/serro-thumb.jpg'},
    {id: 9, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/sibras-thumb.jpg'},
    {id: 10, name: 'Direção de Arte', src: 'image/roldao-posts-facebook-thumb.jpg'},
    {id: 11, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/probat-thumb.jpg'},
    {id: 12, name: 'Website Interface', src: 'image/globo-renault-thumb.jpg'},
    {id: 13, name: 'Branding', src: 'image/marmoraria-thumb.jpg'},
    {id: 14, name: 'Projeto Gráfico', src: 'image/jornal-independente-thumb.jpg'},
    {id: 15, name: 'Branding +  Website Interface + Desenvolvimento Wordpress', src: 'image/zeta-estaleiro.jpg'},
    {id: 16, name: 'Projeto Gráfico', src: 'image/curitiba-cultura-thumb.jpg'},
    {id: 17, name: 'Direção de Arte', src: 'image/shopping-total-thumb.jpg'},
    {id: 18, name: 'Direção de Arte', src: 'image/volvo-ce-facebook.jpg'},
    {id: 19, name: 'Direção de Arte', src: 'image/boticario-thumb.jpg'},
    {id: 20, name: 'Direção de Arte', src: 'image/gazeta-thumb.jpg'},

];
    const toTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    const scrollToNextBox = useCallback(() => {
        if (!boxesRef.current || boxesRef.current.length === 0) return;

        setCurrentBox(prev => {
            if (prev < boxesRef.current.length - 1) {
                const nextBox = boxesRef.current[prev + 1];
                if (nextBox) {
                    nextBox.scrollIntoView({
                        behavior: "smooth",
                        block: 'center',
                        inline: 'center'
                    });
                    return prev + 1;
                }
            }
            return prev;
        });
    }, []);


    const handleThumbsSwiper = useCallback((swiper) => {
        setThumbsSwiper(swiper);
    }, []);

    const handleHashNavigation = useCallback((swiper) => {
        const updateHash = () => {
            const activeSlide = swiper.slides[swiper.activeIndex];
            if (activeSlide) {
                const hash = activeSlide.getAttribute('data-hash');
                if (hash) {
                    window.location.hash = hash;
                }
            }
        };

        swiper.on('slideChange', updateHash);
        updateHash();
    }, []);

        useEffect(() => {
        const updateBoxes = () => {
            boxesRef.current = Array.from(document.querySelectorAll('.box-next'));
        };
        
        updateBoxes();

        const observer = new MutationObserver(updateBoxes);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
        };
    }, []);
        const handleKeyDown = useCallback((e) => {
            if (e.key === 'Enter' || e.key === 'ArrowDown') {
                e.preventDefault();
                console.log(e.key);
                window.scrollTo({
                    top: document.querySelector('#works').offsetTop,
                    behavior: 'smooth',
                });
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                console.log(e.key);
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
            if (e.key === 'p') {
                console.log(e.key);
                window.location.href = '/portfolio';
            }
        }, []);
    
        useEffect(() => {
            window.addEventListener('keydown', handleKeyDown);
    
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }, [handleKeyDown]);

	return (
		<>
			<Nav />
			<div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="box box-1 my-3 box-next" onClick={scrollToNextBox}>
                            <h2>Taukane</h2>
                            <p>{t('intro')}</p>
                        </div>
                        <hr className="bg-light text-white w-50 mx-auto shadow-sm" />
                        <div className="box box-2 my-3 box-next" onClick={scrollToNextBox}>
                            <h2>Designer</h2>
                            <p>{t('designer')}</p>
                        </div>
                    </div>
                </div>
			</div>
            <div className="container box-next" onClick={scrollToNextBox}>
                <div className="row">
                    <div className="col">
                        <Swiper
                            onSwiper={handleThumbsSwiper}
                            modules={[Grid]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    grid: {
                                        rows: 8,
                                        fill: 'row',
                                    },
                                },
                                768: {
                                    slidesPerView: 3,
                                    grid: {
                                        rows: 5,
                                        fill: 'row',
                                    },
                                },
                                1200: {
                                    slidesPerView: 6,
                                    grid: {
                                        rows: 3,
                                        fill: 'row',
                                    },
                                },
                            }}
                            spaceBetween={1}
                            id="works"
                        >
                        {
                            thumbis.map((tumbis) =>(
                                <SwiperSlide  key={tumbis.id} data-hash={`portfolio-${tumbis.id}`}>
                                    <a href="#ancora" alt="Web Design Curitiba" title="Web Design Curitiba">
                                        <h4 className="link-offset-3">{tumbis.name}</h4>   
                                        {tumbis.src ? (
                                            <img
                                            src={tumbis.src} 
                                            alt={tumbis.name}
                                            />
                                        ): null
                                        }
                                    </a>
                                </SwiperSlide>
                            ))
                        }
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xxl-auto mx-auto p-3">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#ff9900',
                            }}
                            modules={[Keyboard, Navigation, Thumbs, HashNavigation]}
                            hashNavigation={{
                                watchState: true,
                            }}
                            onSwiper={handleHashNavigation}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            loop={true}
                            spaceBetween={20}
                            keyboard={{
                                enabled: true,
                            }}
                            navigation={true}
                            autoHeight={true}
                            ref={swiperRef}>
                            {panels.map((panel) => (
                                <SwiperSlide key={panel.id} data-hash={`portfolio-${panel.id}`} id="ancora" className="pb-3">
                                    <h5 className="mt-5 pt-4 fw-bold text-light">{panel.name}</h5>
                                    <div>{panel.descricao}</div>
                                    {panel.src && panel.src.length > 0 && (
                                        <Swiper
                                            style={{
                                                '--swiper-navigation-color': '#f40',
                                            }}
                                            spaceBetween={40}
                                            slidesPerView={1}
                                            modules={[Navigation, Pagination]}
                                            navigation={panel.src.length > 1}
                                            pagination={{ clickable: true }}
                                        >
                                            {panel.src.map((imgSrc, idx) => imgSrc && (
                                                <SwiperSlide key={idx}>
                                                    <img
                                                        src={imgSrc}
                                                        alt={`${panel.name} - Web Design Curitiba ${idx + 1}`}
                                                        className="img-fluid rounded shadow-lg"
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="container-fluid box-next" onClick={scrollToNextBox}> 
                <div className="box">
                    <div className="row">
                        <div className="col-md-6 my-auto align-items-center text-light bio">
                        <hr/>
                        <h3>{t('bio.0')}</h3>
                        <hr/>
                        <h4>{t('bio.1')}</h4>
                        <hr/>
                        <h4>{t('bio.2')}</h4>
                        <hr/>
                        <h5 className="mb-5">{t('bio.3')}</h5>
                        </div>
                    </div>
                </div>
                <div className="container my-5" onClick={scrollToNextBox}>
                    <div className="apresenta rounded">
                        <NavLink to="/portfolio" title="Portfolio Designer Curitiba">
                            <Logo />
                            <h1>Portfolio Designer Curitiba</h1>
                        </NavLink>
                    </div>
                </div>  
                <h5 className="bg-body-tertiary mt-0 mb-0 py-4 text-center position-relative fw-bold">{t('widgets-title')}:</h5>
                <Swiper
                    style={{
                    '--swiper-pagination-color': '#121212',
                    }}
                    breakpoints={{
                        '@0.00': {
                        slidesPerView: 3,
                        spaceBetween: 80,
                        },
                        '@1.00': {
                        slidesPerView: 6,
                        spaceBetween: 50,
                        },
                        '@1.50': {
                        slidesPerView: 12,
                        spaceBetween: 40,
                        },
                    }}
                    modules={[ FreeMode, Pagination ]}
                    pagination={true}
                    grabCursor={true}
                    freeMode={true}
                    loop={true}
                    className="myexpertise bg-body-tertiary bg-gradient p-5 mb-5 text-center rounded-0 rounded-bottom shadow-lg">
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Illustrator Logo" /><p>Illustrator</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop Logo" /><p>Photoshop</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" alt="Adobe XD Logo" /><p>Adobe XD</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma Logo" /><p>Figma</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" alt="GIMP Logo" /><p>GIMP</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Logo" /><p>HTML</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Logo" /><p>CSS</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass Logo" /><p>Sass</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg" alt="Less Logo" /><p>Less</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jQuery Logo" /><p>jQuery</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP Logo" /><p>PHP</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL Logo" /><p>MySQL</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress Logo" /><p>WordPress</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel Logo" /><p>Laravel</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original-wordmark.svg" alt="Livewire Logo" /><p>Livewire</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg" alt="Tailwind Css" /><p>Tailwind CSS</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite Logo" /><p>Vite</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Logo" /><p>Node.js</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM Logo" /><p>NPM</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code Logo" /><p>VS Code</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg" alt="Apache Logo" /><p>Apache</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/homebrew/homebrew-original.svg" alt="Homebrew Logo" /><p>Homebrew</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Logo" /><p>JavaScript</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Logo" /><p>React</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap Logo" /><p>Bootstrap</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="Amazon Web Services Logo" /><p>Amazon Web Services</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg" alt="Firebase Logo" /><p>Firebase</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git Logo" /><p>Git</p></SwiperSlide>
                    <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Logo" /><p>GitHub</p></SwiperSlide>
                </Swiper>
            </div>
            <hr className="text-light bg-light m-5" />
			<a href="#" onClick={toTop} title="Topo Portfolio" id="topo">
				<img
					src="image/top.jpg"
					alt="Web Design Curitiba"
					title="Web Design Curitiba"
					className="img-fluid rounded shadow-lg"
					width={50}
					height={50}
				/>
			</a>
			<span className="scroller"></span>
		</>
	)
}
export default App