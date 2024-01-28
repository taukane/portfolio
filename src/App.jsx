import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.js'

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

	function handleSubmit(e) {
		// Prevent the browser from reloading the page
		e.preventDefault();

		// Read the form data
		const form = e.target;
		const formData = new FormData(form);

		// You can pass formData as a fetch body directly:
		fetch('/some-api', { method: form.method, body: formData });

		// Or you can work with it as a plain object:
		const formJson = Object.fromEntries(formData.entries());
		console.log(formJson);
	}
	return (
		<>
			<form method="post" onSubmit={handleSubmit}>
				<label>
					Text input:
				</label>
				<input className="form-control" name="myInput" defaultValue="Placeholder"
									   onChange={e => {
										   setForm({
											   ...form,
											   myInput: e.target.value
										   });
									   }}/>
				<p className='my-3'>{form.myInput}</p>
				<hr />
				<div className="form-check">
				<label>
					Checkbox:
				</label>
				<input className="form-check-input" type="checkbox" name="myCheckbox" defaultChecked={true} />
				</div>
				<hr />
				<h2>Radio buttons:</h2>
				<div className="form-check">
					<input className="form-check-input" type="radio" name="myRadio" value="option1" id="myRadio" />
					<label className="form-check-label" htmlFor="myRadio"> Option 1</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="radio" name="myRadio" value="option2" id="myRadio2" defaultChecked={true} />
					<label className="form-check-label" htmlFor="myRadio2"> Option 2</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="radio" name="myRadio" value="option3" id="myRadio3" />
					<label className="form-check-label" htmlFor="myRadio3"> Option 3</label>
				</div>
				<hr />
				<button type="reset" className="btn btn-warning">Reset form</button>
				<button type="submit" className="btn btn-primary">Submit form</button>
			</form>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6">
						<input
							className="form-control"
							value={text}
							onChange={e => setText(e.target.value)}
						/>
						<button className="btn btn-primary" onClick={() => {
							setTodos([{
								id: todos.length,
								text: text
							}, ...todos]);
						}}>Add
						</button>
						<ul className="list-group">
							{todos.map(item => (
								<li className="list-group-item" key={item.id}>
									{item.text}
								</li>
							))}
						</ul>
					</div>
					<div className="col-md-6">
						<label className="form-label">
							First name:
							<input
								className="form-control"
								value={form.firstName}
								onChange={e => {
									setForm({
										...form,
										firstName: e.target.value
									});
								}}
							/>
						</label>
						<label>
							Last name:
							<input
								className="form-control"
								value={form.lastName}
								onChange={e => {
									setForm({
										...form,
										lastName: e.target.value
									});
								}}
							/>
						</label>
						<label>
							Email:
							<input
								className="form-control"
								value={form.email}
								onChange={e => {
									setForm({
										...form,
										email: e.target.value
									});
								}}
							/>
						</label>
					<p>
						{form.firstName}{' '}
						{form.lastName}{' '}
						{form.email}
					</p>
					</div>
				</div>
			</div>

			<h1>Idade: {age}</h1>
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
			<div style="position: relative;display: flex;">
        <div style="position: absolute;display: flex;width: 100%; align-items: center;padding: 20px;">
            <div style="position: relative;height: 30px;width: 100%;display: flex;justify-content: flex-end;">
                <div style="background: rgb(213,34,34);height: 30px;width: 100%;"></div>
                <div id="playerHealth" style="position: absolute;background: green;top:0;bottom: 0;right: 0;width: 100%;"></div>
            </div>

            <div id="timer" style="background-color: rgb(255, 255, 255);height: 100px;width: 100px;border-radius: 50%; flex-shrink: 0;display: flex;align-items: center;justify-content: center;">
            10
            </div>

            <div style="position: relative;height: 30px;width: 100%;">
                <div style="background: rgb(213,34,34);height: 30px;"></div>
                <div id="enemyHealth" style="position: absolute;background: green;top:0;bottom: 0;left: 0;right: 0;"></div>
            </div>
        </div>
        <div id="display-text" style="position: absolute;color: black;display: flex;align-items: center;justify-content: center;top:0;right: 0;bottom: 0;left: 0;display: none;">Empate</div>
			<canvas id="opa"></canvas>
			</div>
		</>
	)
}

export default App
