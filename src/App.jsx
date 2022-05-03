import React from 'react';
import ReactDOM from 'react-dom/client';
import {Layout} from "./components/Layout.jsx";
import './scss/app.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Layout/>
    </React.StrictMode>
);