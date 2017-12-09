import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

// al ejecutarla genera el store
const store = configureStore();

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
