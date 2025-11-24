
import { NavLink } from "react-router";
import { useState, useEffect, useCallback, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Keyboard, Pagination, Navigation, Thumbs, HashNavigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import Logo from "./assets/Logo.jsx";

import Nav from "./assets/Nav.js";
import { useTranslation } from 'react-i18next';
import { ReactLenis, useLenis } from 'lenis/react';

const panels = [
    {id: 0, name: 'Website + Branding + SEO', descricao:<p><a href="https://dombertolin.com.br" target="_blank" className="font-family-base">Dom Bertolin</a></p>, src: ['image/bom-bertolin-website.png'], alt: 'Website + Branding + SEO'},
    {id: 1, name: 'Design UX/UI + Desenvolvimento Laravel', descricao:<p>Real Veiculos / Volkswagen <small>/ 2022</small></p>, src: ['image/Volkswagen-layout-site.png', 'image/volkswagen-design-ux-ui.webp'], alt: 'Design UX/UI + Desenvolvimento Laravel'},
    {id: 2, name: 'Design UX/UI + Desenvolvimento Laravel', descricao: <p>Honda <small>/ 2021</small></p>, src: ['image/honda-veiculos.jpg', 'image/honda-interfaces.webp'], alt: 'Design UX/UI + Desenvolvimento Laravel'},
    {id: 3, name: 'Design UX/UI + Desenvolvimento Laravel e Wordpress', descricao: <p>Autoconf<small> / 2021 / 2024</small></p>, src: ['image/design-system-autoconf-bootstrap.webp', 'image/autoconf-design-system-mobile.webp', 'image/autoconf-design-system-desktop.webp', 'image/autoconf-kanban-ux-ui.webp', 'image/autoconf-sitemap.webp', 'image/autoconf-websites-templates.webp', 'image/layout-blog-autoconf-v2-01.jpg'], alt: 'Design UX/UI + Desenvolvimento Laravel e Wordpress'},
    {id: 4, name: 'Projeto Gráfico Embalagem', descricao: <p>Tramontina<small> / 2020</small></p>, src: ['image/facas-embalagens.png'], alt: 'Projeto Gráfico Embalagem'},
    {id: 5, name: 'Design UX/UI', descricao: <p>Lawww <small>/ 2018</small></p>, src: ['image/laww-layout-home-v2.webp'], alt: 'Design UX/UI'},
    {id: 6, name: 'Design UX/UI + Desenvolvimento Wordpress', descricao: <p>Black Club <small>/ 2018</small></p>, src: ['image/black-club-layout-v2.webp'], alt: 'Design UX/UI + Desenvolvimento Wordpress'},
    {id: 7, name: 'Direção de Arte Redes Sociais', descricao:<p>Roldão Atacadista  <small>/ 2017</small></p>, src: ['image/roldao-posts.webp'], alt: 'Direção de Arte Redes Sociais'},
    {id: 8, name: 'Design UX/UI + Desenvolvimento Wordpress', descricao:<p>Probat Leogap <small>/ 2016</small></p>, src: ['image/probat-leogap-website-2017.jpg', 'image/probat-leogap-wireframe-2017.jpg'], alt: 'Design UX/UI + Desenvolvimento Wordpress'},
    {id: 9, name: 'Branding', descricao:<p>Marmoraria Florianópolis <small>/ 2014</small></p>, src: ['image/marmoraria-florianopolis-2014.jpg'], alt: 'Branding'},
    {id: 10, name: 'Projeto Gráfico Jornal', descricao:<p>Jornal Independente <small>/ 2014</small></p>, src: ['image/jornal-independente-big.jpg'], alt: 'Projeto Gráfico Jornal'},
    {id: 11, name: 'Branding + Design UX/UI + Desenvolvimento Wordpress', descricao:<p>Zeta Estaleiro <small>/ 2013</small></p>, src: ['image/zeta-estaleiro-redesign.jpg'], alt: 'Branding + Design UX/UI + Desenvolvimento Wordpress'},
    {id: 12, name: 'Direção de Arte Redes Sociais', descricao:<p>Shopping Total <small>/ 2012</small></p>, src: ['image/shopping-total.webp', 'image/shopping-total.jpg'], alt: 'Direção de Arte Redes Sociais'},
    {id: 13, name: 'Direção de Arte Redes Sociais e Email Marketing', descricao:<p>Volvo CE <small>/ 2012</small></p>, src: ['image/volvo-facebook-2012.jpg','image/volvo-2012.jpg', 'image/volvo-2012-posts.jpg'], alt: 'Direção de Arte Redes Sociais e Email Marketing'},
    {id: 14, name: 'Direção de Arte Web', descricao:<p>Gazeta do Povo <small>/ 2010</small></p>, src: ['image/gazeta.webp'], alt: 'Direção de Arte Web'},
];

const thumbis = [
    {id: 0, name: 'Website + Branding + SEO', src: 'image/dombertolin-thumb.jpg', alt: 'Website + Branding + SEO'},
    {id: 1, name: 'Design UX/UI + Desenvolvimento Laravel', src: 'image/volks-thumb.jpg', alt: 'Design UX/UI + Desenvolvimento Laravel'},
    {id: 2, name: 'Design UX/UI + Desenvolvimento Laravel', src: 'image/honda-thumb.jpg', alt: 'Design UX/UI + Desenvolvimento Laravel'},
    {id: 3, name: 'Design UX/UI + Desenvolvimento Laravel', src: 'image/autoconf-thumb.jpg', alt: 'Design UX/UI + Desenvolvimento Laravel'},
    {id: 4, name: 'Projeto Gráfico Embalagem', src: 'image/facas-embalagens-thumb.jpg', alt: 'Projeto Gráfico Embalagem'},
    {id: 5, name: 'Design UX/UI', src: 'image/laww-thumb.jpg', alt: 'Design UX/UI'},
    {id: 6, name: 'Design UX/UI + Desenvolvimento Wordpress', src: 'image/blackclub-thumb.png', alt: 'Design UX/UI + Desenvolvimento Wordpress'},
    {id: 7, name: 'Direção de Arte', src: 'image/roldao-posts-facebook-thumb.jpg', alt: 'Direção de Arte'},
    {id: 8, name: 'Design UX/UI + Desenvolvimento Wordpress', src: 'image/probat-thumb.jpg', alt: 'Design UX/UI + Desenvolvimento Wordpress'},
    {id: 9, name: 'Branding', src: 'image/marmoraria-thumb.jpg', alt: 'Branding'},
    {id: 10, name: 'Projeto Gráfico', src: 'image/jornal-independente-thumb.jpg', alt: 'Projeto Gráfico'},
    {id: 11, name: 'Branding + Design UX/UI + Desenvolvimento Wordpress', src: 'image/zeta-estaleiro.jpg', alt: 'Branding + Design UX/UI + Desenvolvimento Wordpress'},
    {id: 12, name: 'Direção de Arte', src: 'image/shopping-total-thumb.jpg', alt: 'Direção de Arte'},
    {id: 13, name: 'Direção de Arte', src: 'image/volvo-ce-facebook.jpg', alt: 'Direção de Arte'},
    {id: 14, name: 'Direção de Arte', src: 'image/gazeta-thumb.jpg', alt: 'Direção de Arte'},
];

function Port() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const panelsSwiperRef = useRef(null);
    const lenis = useLenis();

    const tumbers = useCallback((Swiper) => {
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

      const handleExternalLinkClick = () => {
        window.open = 'https://taukdesign.com.br', '_blank';
  };

return (
<>
<Nav />
<ReactLenis root>
    <div className="container">
        <div className="portfa rounded-bottom col-md-11 col-lg-12 col-xl-8 col-auto col mb-5 sticky-top">
        <a href="https://taukdesign.com.br" target="_blank" onClick={handleExternalLinkClick} title="Tauk Design" className="d-block">
            <Logo />
            <h1>Web Designer Curitiba</h1>
        </a>
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#ff9900',
                    }}
                    onSwiper={tumbers}
                    modules={[Grid, Navigation]}
                    slidesPerView={2}
                    navigation={true}
                    grid={{
                        rows: 3,
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 1,
                        rows: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 1,
                        rows: 8,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 1,
                        rows: 4,
                    },
                    }}
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
                                <h4 className="link-offset-3">{tumbis.name}</h4>   
                                {tumbis.src ? (
                                    <img
                                    src={tumbis.src} 
                                    alt={`${tumbis.alt}`} 
                                    title={`${tumbis.alt}`}
                                    width={280}
                                    height={280}
                                    className="img-fluid"
                                    />
                                ): null
                                }
                            </a>
                            {tumbis.last}
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
            <div className="col-12 col-lg-11 col-xxl-auto mx-auto">
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#ff9900',
                    }}
                    modules={[Keyboard, Navigation, Thumbs, HashNavigation]}
                    hashNavigation={{
                        watchState: false,
                    }}
                    onSwiper={hash}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    loop={true}
                    spaceBetween={20}
                    keyboard={{
                        enabled: true,
                    }}
                    navigation={true}
                    autoHeight={true}
                    ref={panelsSwiperRef}>
                    {panels.map((panel) => (
                        <SwiperSlide key={panel.id} data-hash={`portfolio-${panel.id}`} className="pb-3" loading="lazy">
                            <h5 className="mt-5 pt-4 fw-bold">{panel.name}</h5>
                            <div>{panel.descricao}</div>
                            {panel.src && panel.src.length > 0 ? (
                                <Swiper
                                style={{ '--swiper-navigation-color': '#f40', 'height': 'auto' }}
                                lazy={true.toString()}
                                spaceBetween={40}
                                slidesPerView={1}
                                modules={[Navigation, Pagination]}
                                navigation={panel.src.length > 1}
                                pagination={{ clickable: true }}
                                nested={true}
                                onTouchStart={(e) => e.stopPropagation()}
                                onTouchMove={(e) => e.stopPropagation()}
                                onPointerDown={(e) => e.stopPropagation()}
                                onMouseDown={(e) => e.stopPropagation()}
                                >
                                    <SwiperSlide>
                                        <img
                                            src={panel.src[0]}
                                            alt={`${panel.name} - Design 1`}
                                            className="img-fluid rounded shadow-lg"
                                        />
                                    </SwiperSlide>
                                    {panel.src[1] && (
                                        <SwiperSlide>
                                            <img
                                                src={panel.src[1]}
                                                alt={`${panel.name} - Design 2`}
                                                className="img-fluid rounded shadow-lg"
                                            />
                                        </SwiperSlide>
                                    )}
                                    {panel.src[2] && (
                                        <SwiperSlide>
                                            <img
                                                src={panel.src[2]}
                                                alt={`${panel.name} - Design 3`}
                                                className="img-fluid rounded shadow-lg"
                                            />
                                        </SwiperSlide>
                                    )}
                                    {panel.src[3] && (
                                        <SwiperSlide>
                                            <img
                                                src={panel.src[3]}
                                                alt={`${panel.name} - Design 4`}
                                                className="img-fluid rounded shadow-lg"
                                            />
                                        </SwiperSlide>
                                    )}
                                    {panel.src[4] && (
                                        <SwiperSlide>
                                            <img
                                                src={panel.src[4]}
                                                alt={`${panel.name} - Design 5`}
                                                className="img-fluid rounded shadow-lg"
                                            />
                                        </SwiperSlide>
                                    )}
                                    {panel.src[5] && (
                                        <SwiperSlide>
                                            <img
                                                src={panel.src[5]}
                                                alt={`${panel.name} - Design 6`}
                                                className="img-fluid rounded shadow-lg"
                                            />
                                        </SwiperSlide>
                                    )}
                                    {panel.src[6] && (
                                        <SwiperSlide>
                                            <img
                                                src={panel.src[6]}
                                                alt={`${panel.name} - Wordpress Layout e Desenvolvimento`}
                                                className="img-fluid rounded shadow-lg"
                                            />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            ) : null}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </div>
</div>
</ReactLenis>
<hr className="w-50 mx-auto" />
    <p className="small text-center">Taukane Portfolio / 2025</p>
<hr className="w-50 mx-auto" />
</>
)}

export default Port