import React from 'react';

function Images() {
     const panels = [
        {id: 0, name: 'Website ', descricao:<p><a href="https://dombertolin.com.br" target="_blank" className="text-light">Dom Bertolin <small>/ Branding</small></a></p>, src: ['image/bom-bertolin-website.png']},
        {id: 1, name: 'Website Interface + Desenvolvimento Laravel', descricao:<p>Mitsul / Mitsubishi <small>/ 2023</small></p>, src: ['image/mitsul.jpg']},
        {id: 2, name: 'Website Interface + Desenvolvimento Laravel', descricao:<p>Real Veiculos / Volkswagen <small>/ 2022</small></p>, src: ['image/Volkswagen-layout-site.png']},
        {id: 3, name: 'Website Interface + Desenvolvimento Laravel', descricao: <p>Honda <small>/ 2021</small></p>, src: ['image/honda-veiculos.jpg']},
        {id: 4, name: 'Website Interface + Desenvolvimento Wordpress', descricao: <p>Autoconf<small>/ 2021</small></p>, src: ['image/layout-blog-autoconf-v2-01.jpg', 'image/design-system.jpg']},
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
    return (
        <>
        </>
    )
}

export default Images