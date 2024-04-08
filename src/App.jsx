import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import './index.js'
// import '../js/jquery.lazyload.min.js'
// import '../js/media.js'
// import '../js/jquery.easing.1.3.js'
// import '../js/jquery.coda-slider-2.0.js'
function App() {

	const [todos, setTodos] = useState(createInitialTodos);
	const [text, setText] = useState('');
	const [count, setCount] = useState(0)
	const [age, setAge] = useState(38);
	function createInitialTodos() {
		const initialTodos = [];
		for (let i = 0; i < 10; i++) {
			initialTodos.push({
				id: i,
				text: 'Item ' + (i + 1)
			});
		}
		return initialTodos;
	}

	function increment() {
		setAge(a => a + 1);
	}

	const [form, setForm] = useState({
		myInput: '',
		firstName: '',
		lastName: '',
		email: '',
	});

	return (
		<>
			<div className="apresenta">
				<a
					href="javascript:dimOn();"
					className="tauk"
					title="Taukane Designer Web e Grafico"
				>
					<h1>Taukane Designer em Curitiba Portfolio</h1>
				</a>
				<div className="caxa">
					<h2>Taukane</h2>
					<h3>Designer Web e Gráfico</h3>
					<p className="bio-text">
						Atuo em criação e desenvolvimento de interfaces visuais, para mídias
						online e off-line.
					</p>
					<div className="contactInfo">
						<a
							href="http://www.linkedin.com/in/taukane"
							title="linkedin Taukane"
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
								fill="#0a66c2"
								className="bi bi-linkedin"
								viewBox="0 0 16 16"
							>
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
							</svg>
							<span className="text-left">Linkedin</span>
						</a>
						<hr/>
					</div>
				</div>
			</div>
			<div id="works">
				<div>
					<h4>
						Cover Facebook + Email Marketing
						<br/>
						<strong>Volvo CE</strong>
					</h4>
					<a className="xtrig" href="#1" rel="coda-slider-1['1']">
						<img
							src="image/work22.jpg"
							alt="Cover Facebook + Email Marketing"
							width={280}
						/>
					</a>
				</div>
				<div>
					<h4>
						Identidade Visual
						<br/>
						<strong>Marmoraria Florianópolis</strong>
					</h4>
					<a href="#2" className="xtrig" rel="coda-slider-1['2']">
						<img
							src="image/marmoraria-florianopolis.jpg"
							alt="Re-Design de Marca  - Marmoraria Florianópolis"
							width={280}
						/>
					</a>
				</div>
				<div>
					<h4>
						Interface Website + Desenvolvimento Wordpress <br/>
						<strong>Probat Leogap</strong>
					</h4>
					<a className="xtrig" href="#3" rel="coda-slider-1['3']">
						<img
							src="image/probat-leogap-website.jpg"
							alt="Interface Design + Desenvolvimento Wordpress"
							width={280}
						/>
					</a>
				</div>
				<div>
					<h4>
						Midia Kit
						<br/>
						<strong>Curitiba Cultura</strong>
					</h4>
					<a href="#4" className="xtrig" rel="coda-slider-1['4']">
						<img
							src="image/curitiba-cultura-peq.jpg"
							alt="Midia Kit Projeto Gráfico - Curitiba Cultura"
							width={280}
						/>
					</a>
				</div>
				<div>
					<h4>
						Posts Facebook
						<br/>
						<strong>Roldão Atacadista</strong>
					</h4>
					<a href="#5" className="xtrig" rel="coda-slider-1['5']">
						<img
							src="image/posts-facebook-thumb.jpg"
							alt="Posts Facebook"
							width={280}
						/>
					</a>
				</div>
				<div>
					<h4>
						Identidade Visual + Website
						<br/>
						<strong>Zeta Estaleiro</strong>
					</h4>
					<a href="#6" className="xtrig" rel="coda-slider-1['6']">
						<img
							src="image/zeta-estaleiro.jpg"
							alt="Identidade Visual e Website - Zeta Estaleiro"
							width={280}
						/>
					</a>
				</div>
				<div>
					<h4>
						Interface Visual
						<br/>
						<strong>Gazeta do Povo</strong>
					</h4>
					<a className="xtrig" href="#7" rel="coda-slider-1['7']">
						<img src="image/gazeta-thumb.jpg" alt="Interface Visual" width={280}/>
					</a>
				</div>
				<div>
					<h4>
						Facebook
						<br/>
						<strong>Shopping Total</strong>
					</h4>
					<a className="xtrig" href="#8" rel="coda-slider-1['8']">
						<img src="image/work19.jpg" alt="Facebook" width={280}/>
					</a>
				</div>
				<div>
					<h4>
						Desenvolvimento Front-end
						<br/>
						<strong>Instituto GRPCOM</strong>
					</h4>
					<a className="xtrig" href="#9" rel="coda-slider-1['9']">
						<img
							src="image/work18.jpg"
							alt="Desenvolvimento Front-end"
							width={280}
						/>
					</a>
				</div>
			</div>

			<a className="fechar" href="javascript:dimOff();">
				<img alt="Fechar" src="image/bt_fechar.gif" width={50}/>
			</a>
			<a href="javascript:void(0);" title="Topo" id="topo">
				<img
					src="image/top.jpg"
					alt="Taukane - Diretor de Arte Web"
					title="Website"
					width={50}
				/>
			</a>
			<h2>Idade: {age}</h2>
			<button className="btn btn-lg btn-outline-danger" onClick={() => {
				increment();
				increment();
				increment();
			}}>+3
			</button>
			<button className="btn btn-lg btn-secondary" onClick={() => {
				increment();
			}}>+1
			</button>

			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo"/>
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo"/>
				</a>
			</div>
			<h1 className="my-teste-class">Title</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</>
	)
}

export default App
