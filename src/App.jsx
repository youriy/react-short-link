import React from 'react';
import ReactDOM from 'react-dom/client';
import {Layout} from "./components/Layout.jsx";
import './scss/app.scss'
import { Provider } from 'react-redux'
import {store} from "./store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Layout/>
        </Provider>
    </React.StrictMode>
);