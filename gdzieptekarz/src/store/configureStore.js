import { createStore, combineReducers } from 'redux';
import aptekaReducer from '../reducers/apteka';
import renderedDrugsReducer from '../reducers/leki';


export default () => {
    const store = createStore(
        combineReducers({
            renderedDrugs: renderedDrugsReducer,
            apteka: aptekaReducer
        })
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
