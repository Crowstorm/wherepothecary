import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { setLat, setLon } from './actions/apteka'

import configureStore from './store/configureStore' //STORE

const store = configureStore();

store.dispatch(setLat(66));
store.dispatch(setLon(30));

setTimeout(() =>{
console.log(store.getState())
}
, 10000)


const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
