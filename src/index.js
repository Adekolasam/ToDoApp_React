import React from "react";
import ReactDOM from 'react-dom/client';
import "./style.css"
import App from "./components/todo/app";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
