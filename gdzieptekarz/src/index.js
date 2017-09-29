import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid'

import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { setLat, setLon } from './actions/apteka'
import { setId } from './actions/leki'

import configureStore from './store/configureStore' //STORE

const store = configureStore();

// console.log(store.getState())

store.dispatch(setLat(66));
store.dispatch(setLon(30));

// store.dispatch(setId(1, 45));
// console.log(store.getState())

setTimeout(() =>{
console.log(store.getState())
}
, 10000)

// store.dispatch(setPrice(45, {price: 370}));

setInterval(() =>{
    store.dispatch(setId(uuid(), uuid()));
    }
    , 7000)

// console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
