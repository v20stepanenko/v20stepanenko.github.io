// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Instruments
import './theme/reset.css';
import './theme/theme.scss';
import { BrowserRouter } from 'react-router-dom';

// App
import App from './containers/App';
import Catcher from './component/Catcher';

ReactDOM.render(
    <Catcher>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Catcher>,
    document.getElementById('root')
);
