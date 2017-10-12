import { createStore, combineReducers, applyMiddleware } from 'redux';
import aptekaReducer from '../reducers/apteka';
import renderedDrugsReducer from '../reducers/leki';

import renderedDrugsReducer2 from '../reducers/leki2';

import thunk from 'redux-thunk'


export default () => {
    const store = createStore(
        combineReducers({
            renderedDrugs2: renderedDrugsReducer2,
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
