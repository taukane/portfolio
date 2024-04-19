import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page" className="my-5 text-white display-3">
			<h1>Oops!</h1>
			<p>Erro Inexperado.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}