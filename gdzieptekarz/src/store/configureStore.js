import { createStore, combineReducers, applyMiddleware } from 'redux';
import aptekaReducer from '../reducers/apteka';
import renderedDrugsReducer from '../reducers/leki';

import thunk from 'redux-thunk'


export default () => {
    const store = createStore(
        combineReducers({
            renderedDrugs: renderedDrugsReducer,
            apteka: aptekaReducer
        }),
        applyMiddleware(thunk)
    )
    return store;
}

//STORE CREATION
// const store = createStore(
//     combineReducers({
//         renderedDrugs: renderedDrugsReducer,
//         apteka: aptekaReducer
//     })
// )
