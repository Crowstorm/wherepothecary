import React from 'react'

//APTEKA REDUER

const aptekaReducerDefState = {
    latA: undefined,
    lonA: undefined,
    name: undefined,
    address: undefined
}

const aptekaReducer = (state = aptekaReducerDefState, action) => {
    switch (action.type) {
        case 'SET_LAT':
            return {
                ...state,
                latA: action.latA
            }
        case 'SET_LON':
            return {
                ...state,
                lonA: action.lonA
            }
        case 'SET_NAME':
            return  {
                ...state,
                name: action.name,
                address: action.address
            }
                 

                
            
        default:
            return state;
    }
}

export default aptekaReducer;