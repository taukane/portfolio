import { NavLink } from "react-router";
import React, { useEffect, useRef, useState } from "react";

function toTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

function App() {
	const boxesRef = useRef([]);
    const [currentBox, setCurrentBox] = useState(0);

    const scrollToNextBox = () => {
        if (currentBox < boxesRef.current.length - 1) {
            const nextBox = boxesRef.current[currentBox + 1];
            if (nextBox) {
                nextBox.scrollIntoView({ 
					behavior: "smooth",
					block: 'center',
					inline: 'center'	
				});
                setCurrentBox(currentBox + 1);
            }
        } else {
            boxesRef.current[0]?.scrollIntoView({					
					behavior: "smooth",
					block: 'center',
					inline: 'center'
				 });
            setCurrentBox(0);
        }
    };

    useEffect(() => {
        boxesRef.current = document.querySelectorAll('.box');
    }, []);
	return (
		<>
			<span className="scroller"></span>
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<div className="box box-1 my-5" onClick={scrollToNextBox}>
							<h2>Taukane</h2>
							<p>Atuo em criação e desenvolvimento de interfaces visuais, para mídias online e off-line.
							</p>
						</div>
						<div className="box box-2 my-5" onClick={scrollToNextBox}>
							<h2>Designer</h2>
							<p>Arquitetura da informação e wireframes até a implementação de interfaces UX/UI centradas no usuário.
							</p>
						</div>
						<div className="box box-3 my-5" onClick={scrollToNextBox}>
							<h2>Web e Gráfico</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="apresenta box rounded mb-5 pb-5">
				<NavLink to="/portfolio" title="Portfolio Designer Web e Grafico"><h1>Portfolio Designer Web e Grafico</h1></NavLink>
				<div className="container">
					<div className="row">
						<div className="col-md-10 d-flex justify-content-md-end justify-content-center gap-5 mt-5 contact-infos">
							<div className="d-block">
								<a
									href="http://www.linkedin.com/in/taukane"
									title="Linkedin Taukane"
									rel="noopener"
									target="_blank">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										fill="#0a66c2"
										className="bi bi-linkedin"
										viewBox="0 0 16 16">
										<path
											d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
									</svg>
									<span className="btn btn-sm">Linkedin</span>
								</a>
							</div>
							<div className="d-block">
								<a
									href="https://github.com/taukane/portfolio-taukane"
									title="Github Taukane"
									rel="noopener"
									target="_blank">
									<svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32"
										 data-view-component="true"
										 className="octicon octicon-mark-github v-align-middle color-fg-default">
										<path
											d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
									</svg>
									<span className="btn btn-sm">GitHub</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a href="#" onClick={toTop} title="Topo Portfolio" id="topo">
				<img
					src="image/top.jpg"
					alt="Taukane - Diretor de Arte Web"
					title="Diretor de Arte Web Curitiba"
					className="img-fluid rounded shadow-lg"
					width={50}
					height={50}
				/>
			</a>
		</>
	)
}
export default App