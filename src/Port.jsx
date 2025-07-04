
import { NavLink } from "react-router";
import { useState, useEffect, useCallback, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Pagination, Navigation, Thumbs, HashNavigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import Logo from "./assets/Logo.jsx";

import Nav from "./assets/Nav.js";
import { useTranslation } from 'react-i18next';

const panels = [
    {id: 0, name: 'Website Interface + Desenvolvimento Laravel', descricao:<p><a href="https://mitsul.com.br" target="_blank" className="text-light" rel="noreferrer noopener">Mitsul / Mitsubishi</a> <small>/ 2023</small></p>, src: ['image/mitsul.jpg']},
    {id: 1, name: 'Website Interface + Desenvolvimento Laravel', descricao:<p><a href="https://realveiculos.com.br" target="_blank" className="text-light" rel="noreferrer noopener">Real Veiculos / Volkswagen</a> <small>/ 2022</small></p>, src: ['image/Volkswagen-layout-site.png']},
    {id: 2, name: 'Website Interface + Desenvolvimento Laravel', descricao: <p>Honda <small>/ 2021</small></p>, src: ['image/honda-veiculos.jpg']},
    {id: 3, name: 'Website Interface + Desenvolvimento Wordpress', descricao: <p><a href="https://autoconf.com.br" target="_blank" className="text-light" rel="noreferrer noopener">Autoconf</a> <small>/ 2021</small></p>, src: ['image/layout-blog-autoconf-v2-01.jpg']},
    {id: 4, name: 'Projeto Gráfico', descricao: <p>Desenvolvimento de embalagens Bulbo Led <small>/ 2020</small></p>, src: ['image/facas-embalagens.png']},
    {id: 5, name: 'Website Interface UI Design', descricao: <p>Lawww <small>/ 2018</small></p>, src: ['image/laww-layout-home-v2.webp']},
    {id: 6, name: 'Website Interface UI Design', descricao:<p>Serro Carrocerias<small>/ 2018</small></p>, src: ['image/serro-carrocerias.webp']},
    {id: 7, name: 'Direção de Arte Redes Sociais', descricao:<p>Roldão / Perini <small>/ 2017</small></p>, src: ['image/roldao-posts.webp', 'image/megamidia.webp', 'image/megamidia-3.webp']},
    {id: 8, name: 'Website Interface + Desenvolvimento Wordpress', descricao:<p>Probat Leogap <small>/ 2016</small></p>, src: ['image/probat-leogap-website-2017.jpg', 'image/probat-leogap-wireframe-2017.jpg', null]},
    {id: 9, name: 'Layout Landing Page', descricao:<p>Globo Renault Florianópolis <small>/ 2016</small></p>, src: ['image/landing-reanult-globo.jpg']},
    {id: 10, name: 'Branding', descricao:<p>Marmoraria Florianópolis <small>/ 2014</small></p>, src: ['image/marmoraria-florianopolis-2014.jpg']},
    {id: 11, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao:<p>Zeta Estaleiro <small>/ 2013</small></p>, src: ['image/zeta-estaleiro-redesign.jpg']},
    {id: 12, name: 'Projeto Gráfico Midia Kit', descricao:<p>Curitiba Cultura <small>/ 2013</small></p>, src: ['image/curitiba-cultura.jpg']},
    {id: 13, name: 'Direção de Arte Redes Sociais', descricao:<p>Shopping Total <small>/ 2012</small></p>, src: ['image/shopping-total.webp', 'image/shopping-total.jpg', null]},
    {id: 14, name: 'Direção de Arte Redes Sociais e Email Marketing', descricao:<p>Volvo CE <small>/ 2012</small></p>, src: ['image/volvo-facebook-2012.jpg','image/volvo-2012.jpg', 'image/volvo-2012-posts.jpg']},
    {id: 15, name: 'Direção de Arte Apresentação', descricao:<p>Boticário <small>/ 2012</small></p>, src: ['image/boticario.jpg', 'image/boticario-2.jpg', 'image/boticario-3.jpg']},
    {id: 16, name: 'Direção de Arte Web', descricao:<p>Gazeta do Povo <small>/ 2010</small></p>, src: ['image/gazeta.webp']},
    {id: 17},
];

const thumbis = [
    {id: 0, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/mitsul-thumb.jpg'},
    {id: 1, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/volks-thumb.jpg'},
    {id: 2, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/honda-thumb.jpg'},
    {id: 3, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/autoconf-thumb.jpg'},
    {id: 4, name: 'Projeto Gráfico', src: 'image/facas-embalagens-thumb.jpg'},
    {id: 5, name: 'Website Interface', src: 'image/laww-thumb.jpg'},
    {id: 6, name: 'Website Interface', src: 'image/serro-thumb.jpg'},
    {id: 7, name: 'Direção de Arte', src: 'image/roldao-posts-facebook-thumb.jpg'},
    {id: 8, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/probat-thumb.jpg'},
    {id: 9, name: 'Website Interface', src: 'image/globo-renault-thumb.jpg'},
    {id: 10, name: 'Branding', src: 'image/marmoraria-thumb.jpg'},
    {id: 11, name: 'Branding +  Website Interface + Desenvolvimento Wordpress', src: 'image/zeta-estaleiro.jpg'},
    {id: 12, name: 'Projeto Gráfico', src: 'image/curitiba-cultura-thumb.jpg'},
    {id: 13, name: 'Direção de Arte', src: 'image/shopping-total-thumb.jpg'},
    {id: 14, name: 'Direção de Arte', src: 'image/volvo-ce-facebook.jpg'},
    {id: 15, name: 'Direção de Arte', src: 'image/boticario-thumb.jpg'},
    {id: 16, name: 'Direção de Arte', src: 'image/gazeta-thumb.jpg'},
    {id: 17, 
    last:<a href="/portfolio-taukane" className="d-block text-center link-offset-3 link-underline link-underline-opacity-0 link-underline-opacity-50-hover">
        <p>Mais Projetos</p>
        <img
            src="image/more.png"
            alt="+ Projetos Design"
            title="+ Projetos Design"
            className="rounded shadow-lg border-0 mx-auto"
            width={50}
            height={50} />
    </a>
    },
];

function Port() {
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
        if (e.key === '1') {
            console.log(e.key);
            window.location.href = '/';
        }
        if (e.key === '2') {
            console.log(e.key);
            window.location.href = '/portfolio-taukane';
        }
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const panelsSwiperRef = useRef(null);

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

    const scrollToPanel = useCallback(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }, []);

    useEffect(() => {
        scrollToPanel();
        window.addEventListener('hashchange', scrollToPanel); 
        return () => {
            window.removeEventListener('hashchange', scrollToPanel);
        };
    }, [scrollToPanel]);
    const { t, i18n } = useTranslation();

    const getHeadline = () => {
        if (i18n.language === 'pt') {
            return <h2>Desde 2002 desenvolvo Interfaces de Design <b>Web</b> e <b>Gráfico.</b></h2>;
        }
        return <h2>Since 2002 developing <b>Web</b> and <b>Graphic</b> Design Interfaces.</h2>;
    };

return (
<>
<span className="scroller"></span>
<Nav />
<div className="container">
    <div className="row">
        <div className="portfa rounded-bottom col-md-11 col-lg-12 col-xl-8 col-auto col mb-5" loading="lazy">
            <a  title="Designer Web e Grafico"
                href="#works">
                <Logo />
                <h1>Portfolio Web Designer Curitiba</h1>
            </a>
        </div>
        <div className="col-9 col-lg-8 mx-auto lh-lg text-light bio mt-3">
            {getHeadline()}
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
<div className="container-fluid">
        <div className="row">
            <div className="col-12 col-lg-11 col-xxl-auto mx-auto">
                <Swiper
                    style={{
                        '--swiper-pagination-color': '#f90',
                        }}
                    modules={[FreeMode, Pagination, Thumbs]}
                    onSwiper={tumbers}
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
                    id="works"
                >
                {
                    thumbis.map((tumbis) =>(
                        <SwiperSlide  key={tumbis.id} data-hash={`portfolio-${tumbis.id}`}>
                            <a href="#ancora" alt="Designer Web e Grafico" title="Designer Web e Grafico">
                                <h4 className="link-offset-3">{tumbis.name}</h4>   
                                {tumbis.src ? (
                                    <img
                                    src={tumbis.src} 
                                    alt={tumbis.name}
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
                        watchState: true,
                    }}
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
                        <SwiperSlide key={panel.id} data-hash={`portfolio-${panel.id}`} id="ancora" className="pb-3">
                            <h5 className="mt-5 pt-4 fw-bold text-light">{panel.name}</h5>
                            <div>{panel.descricao}</div>
                            {panel.src && panel.src.length > 0 ? (
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#f40',
                                    }}
                                    spaceBetween={40}
                                    slidesPerView={1}
                                    modules={[Navigation, Pagination]}
                                    navigation={panel.src.length > 1}
                                    pagination={{ clickable: true }}>
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
                                </Swiper>
                            ) : null}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </div>
</>
)}

export default Port