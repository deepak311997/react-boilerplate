import React from 'react';
import ReactDOM from 'react-dom';
import './app/app.css'
import * as serviceWorker from './serviceWorker';
import MainRouter from "./app/route/main-route";

ReactDOM.render(<MainRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
