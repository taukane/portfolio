import { href, NavLink } from "react-router";
import { useEffect, useState, useCallback, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Keyboard, Pagination, Navigation, Thumbs, HashNavigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const panels = [
{id: 1, name: 'Website Interface + Desenvolvimento Wordpress', descricao: <p>Black Club <small>/ 2018</small></p>, src: ['image/black-club-layout-v2.webp' ]},
{id: 2, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao: <p>CBD Med <small>/ 2018</small></p>, src: ['image/cbd-med-layout-home-logo.webp'],},
{id: 3, name: 'Website Interface + Desenvolvimento Wordpress', descricao:<p>Sibras <small>/ 2018</small></p>, src: ['image/sibras-site.webp']},
{id: 4, name: 'Projeto Gráfico Jornal', descricao:<p>Jornal Independente <small>/ 2014</small></p>, src: ['image/jornal-independente-big.jpg']},
{id: 5, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao:<p>Emariot <small>/ 2012</small></p>, src: ['image/emariot-2011.jpg']},
{id: 6, name: 'Direção de Arte Redes Sociais', descricao: <p>Café Automatic <small>/ 2012</small></p>, src: ['image/cafe-automatic.jpg']},
{id: 7, name: 'Direção de Arte UI Design', descricao: <p>SDLG <small>/ 2012</small></p>, src: ['image/sdlg-2012.webp', 'image/sdlg-2012-2.jpg']},
{id: 8, name: 'Direção de Arte Web + Desenvolvimento', descricao:<p>Carmen Steffens / Loja Villa / Franquias Brasileiras...  <small>/ 2011</small></p>, src: ['image/taukane-port.jpg']},
{id: 9, name: 'Direção de Arte Web + Email Marketing + Desenvolvimento', descricao:<p>Diversos <small>/ 2008 / 2011</small></p>, src: ['image/varios-taukane.webp']},
{id: 10, name: 'Websites + Projetos Gráficos + Website Interface', descricao:<p>Diversos <small>/ 2004 / 2008</small></p>, src: ['image/inicio-taukane.jpg']},
{id:11,src: null,}
];

const thumbis = [
{id: 1, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/blackclub-thumb.png'},
{id: 2, name: 'Branding + Website Interface + Desenvolvimento Wordpress', src: 'image/cbd-med.jpg'},
{id: 3, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/sibras-thumb.jpg'},
{id: 4, name: 'Projeto Gráfico', src: 'image/jornal-independente-thumb.jpg'},
{id: 5, name: 'Branding + Website Interface + Desenvolvimento Wordpress', src: 'image/emariot-thumb.jpg'},
{id: 6, name: 'Direção de Arte Redes Sociais', src: 'image/cafe-automatic-thumb.jpg'},
{id: 7, name: 'Direção de Arte Web', src: 'image/sdlg-thumb.jpg'},
{id: 8, name: 'Direção de Arte Web', src: 'image/antigos-thumb.jpg'},
{id: 9, name: 'Direção de Arte Web', src: 'image/tauk-2008-thumb.jpg'},
{id: 10, name: 'Direção de Arte Web', src: 'image/tauk-2004-thumb.jpg'},
{id:11, last:<a href="/portfolio" className="d-block my-auto text-center">
    <p>Portfolio</p>
    <img
        src="image/prev.jpg"
        alt="< Portfolio Taukane"
        title="< Portfolio Taukane"
        className="img-fluid rounded shadow-lg border-0 opacity-100"
        width={50}
        height={50}
    />
</a>
},
];

import ContatoModal from './ContatoModal.jsx';
import Nav from './assets/Nav.jsx';
import { useTranslation } from 'react-i18next';

function Portfolio() {
    useEffect(() => {
        const handleKeyUp = (e) => {
            if (e.key === '1') {
                console.log(e.key);
                window.location.href = '/';
            }
            if (e.key === 'ArrowDown') {
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
        };

        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const panelsSwiperRef = useRef(null);

    const thumbs = useCallback((Swiper) => {
        setThumbsSwiper(Swiper);
    }, []);

    const hash = useCallback((Swiper) => {
        const hashNavigation = Swiper.params.hashNavigation;
        if (!hashNavigation) return;

        const updateHash = () => {
            const activeSlide = Swiper.slides[Swiper.activeIndex];
            if (activeSlide) {
                const hash = activeSlide.getAttribute('data-hash');
                if (hash) {
                    document.location.hash = hash;
                }
            }
        };

        Swiper.on('slideChange', updateHash);
        Swiper.on('slideChangeTransitionEnd', updateHash);
        updateHash();
    }, []);

    const [showContato, setShowContato] = useState(false);

    const { t } = useTranslation();

    return (
<>
<span className="scroller"></span>
<Nav/>
<div className="container-fluid">   
    <h5 className="bg-body-tertiary mt-0 mb-0 pt-4 pb-3 text-center">{t('widgets-title')}:</h5>
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
        className="myexpertise bg-body-tertiary bg-gradient pt-4 pb-3 mb-5 text-center rounded-0 rounded-bottom shadow-lg">
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
      <Swiper
    style={{
        '--swiper-pagination-color': '#f90',
    }}
    lazy={true.toString()}
    modules={[FreeMode, Pagination, Thumbs, HashNavigation]}
    hashNavigation={{
        watchState: true,
    }}
    onSwiper={thumbs}
    loop={true}
    spaceBetween={10}
    pagination={{
        clickable: true,
    }}
    freeMode={true}
    watchSlidesProgress={true}
    breakpoints={{
        '@0.00': {
        slidesPerView: 3,
        spaceBetween: 8,
        },
        '@1.00': {
        slidesPerView: 4,
        spaceBetween: 10,
        },
        '@1.50': {
        slidesPerView: 6,
        spaceBetween: 20,
        },
    }}
    id="works">
    {thumbis.map((tumbis) => (
        <SwiperSlide key={tumbis.id} data-hash={`portfolio-${tumbis.id}`}                         
        loading="lazy">
            <a href="#ancora">
                <h4>{tumbis.name}</h4>
                {tumbis.src ? (
                    <img
                        src={tumbis.src}
                        alt={tumbis.name}
                    />
                ) : null}
            </a>
            {tumbis.last}
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
    ))}
</Swiper>
</div>
<Swiper
    style={{
        '--swiper-navigation-color': '#ff9900',
    }}
    modules={[Keyboard, Navigation, Thumbs, HashNavigation]}
    hashNavigation={{
        watchState: true,
    }}
    lazy={true.toString()}
    onSwiper={hash}
    thumbs={{ swiper: thumbsSwiper }}
    loop={true}
    spaceBetween={40}
    keyboard={{
        enabled: true,
    }}
    navigation={true}
    autoHeight={true}
    ref={panelsSwiperRef}>
    {panels.map((panel) => (
        <SwiperSlide key={panel.id} data-hash={`portfolio-${panel.id}`} id="ancora" loading="lazy">
            <h5 className="mt-5 pt-4 ps-4 fw-bold text-light">{panel.name}</h5>
            <div className="ps-4">{panel.descricao}</div>
            {panel.src && panel.src.length > 0 ? (
                <Swiper
                    style={{ '--swiper-navigation-color': '#f40', 'height': 'auto' }}
                    lazy={true.toString()}
                    spaceBetween={40}
                    slidesPerView={1}
                    modules={[Navigation, Pagination]}
                    navigation={panel.src.length > 1}
                    pagination={{ clickable: true }}
                    autoHeight={true}>
                    {panel.src.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={src}
                                alt={`${panel.name} - Design ${index + 1}`}
                                className={`img-fluid ${index === 0 ? 'rounded shadow-lg' : (index === 1 ? 'shadow' : '')}`}
                            />
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : null}
        </SwiperSlide>
    ))}
</Swiper>
<hr className="border-0"/>
</>
)}

export default Portfolio