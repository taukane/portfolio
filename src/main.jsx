import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

//import Root from "./routes/root";
import ErrorPage from "./error-page";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	// {
	// 	path: "/app",
	// 	element: <Root />,
	// },
]);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD9oaTHGy1QF0aYncLbe4ADpNS1HTr76vw",
	authDomain: "portfolio-taukane.firebaseapp.com",
	projectId: "portfolio-taukane",
	storageBucket: "portfolio-taukane.appspot.com",
	messagingSenderId: "1037598800771",
	appId: "1:1037598800771:web:33e3c5d639b347232714b6",
	measurementId: "G-6L6D6911HD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
