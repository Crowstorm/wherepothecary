import { createStore, combineReducers, applyMiddleware } from 'redux';
import aptekaReducer from '../reducers/apteka';
import renderedDrugsReducer from '../reducers/leki';
import userReducer from '../reducers/user'

import thunk from 'redux-thunk'


export default () => {
    const store = createStore(
        combineReducers({
            renderedDrugs: renderedDrugsReducer,
            apteka: aptekaReducer,
            user: userReducer
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
