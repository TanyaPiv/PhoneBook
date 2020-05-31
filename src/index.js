import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import history from './history'

ReactDOM.render(
    <HashRouter history={history}>
        <App />
    </HashRouter >,document.getElementById('root'));
