import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './default.scss'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "REACT_APP_apiKey",
	authDomain: "REACT_APP_authDomain",
	projectId: "REACT_APP_projectId",
	storageBucket: "REACT_APP_storageBucket",
	messagingSenderId: "REACT_APP_messagingSenderId",
	appId: "REACT_APP_appId",
	measurementId: "REACT_APP_measurementId"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
