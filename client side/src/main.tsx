import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App/App';
import 'styles/core.scss';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
