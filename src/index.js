import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import { routerMiddleware } from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history);

// se envia como parametro para que en el archivo configureStore, en la funcion configureStore lo pueda recibir como argumento
const store = configureStore(middleware);
// Para conectarse a redux hay las siguientes maneras : suscribirse, hacer dispatch de las acciones
// se podria pasar el store en cada componente, pero se tendría que tenre cuidado de eso.
// Para solucionar eso está el componente Provider. Al componente provider es ahora al que solo se le envia el store
// Los componentes tienen acceso al store, sin enviarselos de manera directa.

ReactDOM.render(
  <Provider store={store}><Router history={history} /></Provider>
  , document.getElementById('root'));
registerServiceWorker();
