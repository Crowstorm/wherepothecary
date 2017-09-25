//APTEKA REDUER

const aptekaReducerDefState = {
    latA: undefined,
    lonA: undefined
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
        default:
            return state;
    }
}

export default aptekaReducer;