import {auto} from "@popperjs/core";

function dimOn() {
	document.getElementById("QuickView").style.display = "block";
	window.scrollTo({
		top: 658,
		left: 0,
		behavior: 'smooth'
	});
}
function dimOff() {
	document.getElementById("QuickView").style.display = "none";
}

function toTop() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
}

function App() {
	return (
		<>
			<div className="apresenta">
				<a
					onClick={dimOn}
					className="tauk"
					title="Taukane Designer Web e Grafico"
				>
					<h1>Designer Curitiba</h1>
				</a>
				<hr/>
				<div className="caxa">
					<h2 className="text-secondary">TAUKANE</h2>
					<h3>Designer Web e Gráfico</h3>
					<p className="bio-text">
						Atuo em criação e desenvolvimento de interfaces visuais, para mídias
						online e off-line.
					</p>
				</div>
				<hr/>
				<div className="container">
					<div className="row">
						<div className="col-md-10 d-flex justify-content-end gap-5 mt-2 contact-infos">
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
									href="https://github.com/taukane/portfolio"
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
			<div id="QuickView">
				<div className="slider text-center rounded shadow-lg">
					<div className="panel" id="anchor">
						<div className="panel-wrapper">
							<a href="#anchor-1">
								<h4 className="title">Website</h4>
								<p>Real Veiculos / Concessionaria Volkswagem<small>/ 2022</small></p>
								<img
									alt="Website Template"
									src="image/Volkswagen-layout-site.png"
									width={1024}
									height={auto}
								/>
							</a>
						</div>
					</div>
					<div className="panel" id="anchor-1">
						<div className="panel-wrapper">
							<a href="#anchor-2">
								<h4 className="title">Website</h4>
								<p>Honda<small>/ 2021</small></p>
								<img
									alt="Website Template"
									src="image/honda-veiculos.jpg"
									width={1024}
									height={auto}
								/>
							</a>
						</div>
					</div>
					<div className="panel" id="anchor">
						<div className="panel-wrapper">
							<a href="#anchor-1">
								<h4 className="title">Embalagens</h4>
								<p>Faca para embalagens<small>/ 2020</small></p>
								<img
									alt="Faca para embalagens"
									src="image/facas-embalagens.png"
									width={1024}
									height={auto}
								/>
							</a>
						</div>
					</div>
					<div className="panel" id="anchor-1">
						<div className="panel-wrapper">
							<a href="#anchor-2">
								<h4 className="title">Sibras</h4>
								<p>Website Sibras<small>/ 2018</small></p>
								<img
									alt="Layout Landing"
									src="image/sibras-site.webp"
									width={1024}
									height={auto}
								/>
							</a>
						</div>
					</div>
					<div className="panel" id="anchor-2">
						<div className="panel-wrapper">
							<a href="#anchor-3">
								<h4 className="title">Lawww</h4>
								<p>Layout Website <small>/ 2018</small></p>
								<img
									alt="Layout Landing"
									src="image/laww-layout-home-v2.webp"
									width={1024}
									height={auto}
								/>
							</a>
						</div>
					</div>
					<div className="panel" id="anchor-3">
						<div className="panel-wrapper">
							<a href="#anchor-4">
								<h4 className="title">Serro Carrocerias</h4>
								<p>Website Sibras<small>/ 2018</small></p>
								<img
									alt="Layout Landing"
									src="image/serro-carrocerias-layout.webp"
									width={1024}
									height={auto}
								/>
							</a>
						</div>
					</div>
					<div className="panel" id="anchor-4">
						<div className="panel-wrapper">
							<a href="#anchor-5">
								<h4 className="title">Probat Leogap</h4>
								<span>Website Interface + Desenvolvimento Wordpress <small>/ 2017</small></span>
								<img
									alt="Redesign website Probat Leogap"
									src="image/probat-leogap.webp"
									width={1024}
									height={auto}
								/>
							</a>
						</div>
					</div>
					<div className="panel" id="anchor-5">
						<div className="panel-wrapper">
							<a href="#anchor-6">
								<h4 className="title">Roldão Atacadista</h4>
								<span>Facebook Posts  <small>/ 2017</small></span>
								<img
									alt="Facebook Posts"
									src="image/roldao-posts.webp"
									width={1024}
									height={auto}
								/>
							</a>
						</div>
					</div>
					<div className="panel" id="anchor-6">
						<div className="panel-wrapper">
							<a href="#anchor-7">
								<h4 className="title">Globo Renault</h4>
								<p>Layout Landing <small>/ 2016</small></p>
								<img
									alt="Layout Landing"
									src="image/landing-reanult-globo.jpg"
									width={1024}
									height={auto}
								/>
							</a>
						</div>
					</div>
					<div className="panel" id="anchor-7">
						<div className="panel-wrapper">
							<a href="#anchor-8">
								<h4 className="title">Marmoraria Florianópolis</h4>
								<span>Indentidade Visual <small>/ 2014</small></span>
								<img
									alt="Marmoraria Florianópolis Redesign de Marca"
									src="image/marmoraria-florianopolis-2014.jpg"
									width={1024}
									height={auto}
								/>
							</a>
						</div>
					</div>
					<div className="panel" id="anchor-8">
						<div className="panel-wrapper">
							<a href="#anchor-9">
								<h4 className="title">Volvo CE</h4>
								<span>Facebook Cover + Email Marketing <small>/ 2012</small></span>
								<img
									alt="Facebook Cover + Volvo CE Facebook Email Marketing"
									src="image/work22_big.webp"
									width={1024}
									height={auto}
								/>
							</a>
						</div>
					</div>
					<div className="panel" id="anchor-9">
						<div className="panel-wrapper">
							<a href="#anchor">
								<h4 className="title">Gazeta do Povo</h4>
								<span>Layout Classificados<small>/ 2010</small></span>
								<img
									alt="Gazeta do Povo Interface Design"
									src="image/gazeta.webp"
									width={1024}
									height={auto}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<a className="fechar" onClick={dimOff}>
				<img alt="Fechar" src="image/bt_fechar.gif" width={50} height={50}/>
			</a>
			<a onClick={toTop} title="Topo Portfolio" id="topo">
				<img
					src="image/top.jpg"
					alt="Taukane - Diretor de Arte Web"
					title="Taukane Website"
					width={50}
					height={50}
				/>
			</a>
		</>
	)
}

export default App