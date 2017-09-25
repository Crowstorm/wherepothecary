//RENDERED DRUGS REDUCER

const renderedDrugsReducerDefState = {
    id: undefined,
    drugId: undefined,
    price: undefined,
};

const renderedDrugsReducer = (state = renderedDrugsReducerDefState, action) => {
    switch (action.type) {
        case 'SET_ID':
            return [
                ...state,
                action.renderedDrugs
            ]
        case 'SET_PRICE':
            return state.map((drug) => {
                if (drug.drugId === action.drugId) {
                    return {
                        ...drug,
                        ...action.price
                    }
                }
                return drug; //musisz zwrocic niezmodyfikowane
            })
        default:
            return state;
    }
}

export default renderedDrugsReducer;