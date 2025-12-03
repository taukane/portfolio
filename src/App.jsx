import { NavLink } from "react-router";
import{ useEffect, useRef, useCallback, useState } from "react";
import { useTranslation } from 'react-i18next';
import Nav from "./assets/Nav";
import Logo from "./assets/Logo";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, FreeMode, Keyboard, Pagination, Navigation, Thumbs, HashNavigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { ReactLenis, useLenis } from 'lenis/react';

function App() {

    const boxesRef = useRef([]);
    const [currentBox, setCurrentBox] = useState(0);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperRef = useRef(null);
    const lenis = useLenis();

    useEffect(() => {
        const boxes = document.querySelectorAll('.box');
        boxesRef.current = Array.from(boxes);

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
        const mutationObserver = new MutationObserver(() => {
            const updatedBoxes = document.querySelectorAll('.box');
            boxesRef.current = Array.from(updatedBoxes);
            updatedBoxes.forEach(box => {
                if (!observer.getObserverCount?.(box)) {
                    observer.observe(box);
                }
            });
        });

        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

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
            const nextIndex = (prev + 1) % boxesRef.current.length;
            const nextBox = boxesRef.current[nextIndex];
            if (nextBox) {
                requestAnimationFrame(() => {
                    nextBox.scrollIntoView({
                        behavior: "smooth",
                        block: 'center',
                        inline: 'center'
                    });
                });
                return nextIndex;
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

        const scrollToPanel = useCallback((incomingHash) => {
            const hash = typeof incomingHash === 'string' ? incomingHash : window.location.hash;
            if (!hash) return;
    
            const raw = hash.replace(/^#/, '');
    
            const findElement = () => {
                return document.getElementById(raw) || 
                       document.querySelector(`[data-hash="${raw}"]`) || 
                       document.querySelector(`#${raw}`) || 
                       document.querySelector(`[data-hash="portfolio-${raw}"]`) || 
                       document.querySelector(`#portfolio-${raw}`);
            };
    
            const scrollToEl = (el) => {
                if (!el) return;
                // Use requestAnimationFrame to batch DOM reads and avoid forced reflow
                requestAnimationFrame(() => {
                    const top = el.getBoundingClientRect().top + window.scrollY;
                    if (lenis) {
                        lenis.scrollTo(top, { duration: 0.6 });
                    } else {
                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                });
            };
    
            let el = findElement();
            if (el) {
                scrollToEl(el);
                return;
            }
    
            let attempts = 0;
            const maxAttempts = 6;
            const retry = () => {
                attempts += 1;
                el = findElement();
                if (el) {
                    scrollToEl(el);
                } else if (attempts < maxAttempts) {
                    setTimeout(retry, 250);
                }
            };
            setTimeout(retry, 200);
        }, [lenis]);

    const { t, i18n } = useTranslation();
	return (
		<>
        <ReactLenis root></ReactLenis>
        <Nav />
        <div className="container-fluid p-0 m-0 d-flex">
        <section className="d-block w-100">
                    <div className="box box-next" onClick={scrollToNextBox}>
                        <h1 className="d-none">Web Designer</h1>
                        <h2>Taukane</h2>
                        <p>{t('intro')}</p>
                    </div>
                    <hr className="bg-light text-white w-50 mx-auto shadow-sm" />
                    <div className="box my-3" onClick={scrollToNextBox}>
                        <h2>Designer</h2>
                        <p>{t('designer')}</p>
                    </div>
                    </section>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Swiper
                        onSwiper={handleThumbsSwiper}
                        modules={[Grid]}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                grid: {
                                    rows: 4,
                                    fill: 'row',
                                },
                            },
                            768: {
                                slidesPerView: 3,
                                grid: {
                                    rows: 2,
                                    fill: 'row',
                                },
                            },
                            1200: {
                                slidesPerView: 6,
                                grid: {
                                    rows: 1,
                                    fill: 'row',
                                },
                            },
                        }}
                        spaceBetween={1}
                        id="works"
                    >
                    {
                        thumbis.map((tumbis) =>(
                            <SwiperSlide  key={tumbis.id}>
                                <a 
                                    href={`#portfolio-${tumbis.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.hash = `portfolio-${tumbis.id}`;
                                        scrollToPanel(`#portfolio-${tumbis.id}`);
                                    }}
                                    alt={`${tumbis.alt}`} 
                                    title={`${tumbis.alt}`}
                                >
                                    <h3 className="link-offset-3">{tumbis.name}</h3>   
                                    {tumbis.src ? (
                                        <img
                                        src={tumbis.src} 
                                        alt={tumbis.name}
                                        title={tumbis.alt}
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
        <div className="box"  style={{'height': '0',}}></div>
        <div className="container">
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
                            <SwiperSlide key={panel.id} data-hash={`portfolio-${panel.id}`} className="pb-3">
                                <h4 className="mt-5 pt-4 fw-bold">{panel.name}</h4>
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
                                                    alt={`${panel.name} - ${panel.alt} - ${idx + 1}`}
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
            <section className="box d-block w-100">
                <div className="container-fluid" onClick={scrollToNextBox}> 
                    <div className="row">
                        <div className="col-md-6 bio">
                        <hr/>
                        <h5>{t('bio.0')}</h5>
                        <hr/>
                        <h5>{t('bio.1')}</h5>
                        <hr/>
                        <h5>{t('bio.2')}</h5>
                        <hr/>
                        <h6 className="mb-5">{t('bio.3')}</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="box d-block w-100 vh-100">
                <div className="container my-5">
                    <div className="apresenta rounded">
                        <NavLink to="/portfolio" title="Portfolio Designer Curitiba">
                            <Logo />
                            <h6 className="d-none">Designer Curitiba</h6>
                        </NavLink>
                    </div>
                </div>  
            </section>
            <h6 className="mt-0 mb-0 py-4 text-center position-relative fw-bold">{t('widgets-title')}:</h6>
            <Swiper
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
                className="myexpertise bg-gradient bg-body-tertiary p-5 mb-5 text-center rounded-0 rounded-bottom shadow-lg" data-bs-theme="light">
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Illustrator Logo" /><p>Illustrator</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop Logo" /><p>Photoshop</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" alt="Adobe XD Logo" /><p>Adobe XD</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma Logo" /><p>Figma</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" alt="GIMP Logo" /><p>GIMP</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" alt="Blender Logo" /><p>Blender</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Logo" /><p>HTML</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Logo" /><p>CSS</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass Logo" /><p>Sass</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg" alt="Less Logo" /><p>Less</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jQuery Logo" /><p>jQuery</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP Logo" /><p>PHP</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL Logo" /><p>MySQL</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress Logo" /><p>WordPress</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel Logo" /><p>Laravel</p></SwiperSlide>
                <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt="Angular Logo" /><p>Angular</p></SwiperSlide>
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
            <hr className="m-5" data-bs-theme="dark" />
            <a href="#" onClick={toTop} title="Topo Portfolio" id="topo">
                <img
                    src="image/top.jpg"
                    alt="Ir para o topo"
                    title="Ir para o topo"
                    className="img-fluid rounded shadow-lg"
                    width={40}
                    height={40}
                />
            </a>
            <span className="scroller"></span>
		</>
	)
}

const panels = [
    {id: 0, name: 'Website + Branding + SEO', descricao:<p><a href="https://dombertolin.com.br" target="_blank" className="font-monospace">Dom Bertolin</a></p>, src: ['image/bom-bertolin-website.webp'], alt: 'Dom Bertolin: Website + Branding + SEO'},
    {id: 1, name: 'Design UX/UI + Desenvolvimento Laravel', descricao: <p>Honda</p>, src: ['image/honda-veiculos.webp'], alt: 'Honda: Design UX/UI + Desenvolvimento Laravel'},
    {id: 2, name: 'Design UX/UI + Desenvolvimento Laravel', descricao: <p>Autoconf</p>, src: [ 'image/autoconf-kanban-ux-ui.webp'], alt: 'Autoconf: Design UX/UI + Desenvolvimento Laravel'},
    {id: 3, name: 'Projeto Gráfico Embalagem', descricao: <p>Tramontina</p>, src: ['image/facas-embalagens.webp'], alt: 'Tramontina: Projeto Gráfico Embalagem'},
    {id: 4, name: 'Design UX/UI', descricao: <p>Lawww</p>, src: ['image/laww-layout-home-v2.webp'], alt: 'Lawww Design UX/UI'},
    {id: 5, name: 'Direção de Arte Redes Sociais', descricao:<p>Volvo CE</p>, src: ['image/volvo-facebook-2012.webp'], alt: 'Volvo CE: Direção de Arte Redes Sociais'},

];

const thumbis = [
    {id: 0, name: 'Website + Branding + SEO', src: 'image/dombertolin-thumb.jpg', alt: 'Dom Bertolin: Site + Brand + SEO'},
    {id: 1, name: 'Design UX/UI + Desenvolvimento Laravel', src: 'image/honda-thumb.jpg', alt: 'Design UX/UI + Desenvolvimento Laravel, Honda'},
    {id: 2, name: 'Design UX/UI + Desenvolvimento Laravel', src: 'image/autoconf-thumb.jpg', alt: 'Design UX/UI + Desenvolvimento Laravel, Autoconf'},
    {id: 3, name: 'Projeto Gráfico', src: 'image/facas-embalagens-thumb.jpg', alt: 'Projeto Gráfico, Tramontina'},
    {id: 4, name: 'Design UX/UI', src: 'image/laww-thumb.jpg', alt: 'Design UX/UI, Lawww'},
    {id: 5, name: 'Direção de Arte', src: 'image/volvo-ce-facebook.jpg', alt: 'Direção de Arte, Volvo CE'},
];
export default App