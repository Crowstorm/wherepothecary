const renderedDrugsReducerDefState2 = {
    id: undefined,
    nazwa: undefined,
    postac: undefined,
    dawka: undefined,
    opakowanie: undefined,
    producent: undefined,
    cena: undefined
};

const renderedDrugsReducer2 = (state = renderedDrugsReducerDefState2, action) => {
    switch (action.type) {
        case 'SET_DRUG':
            return [
                ...state,
                action.renderedDrugs2
            ]
        // case 'SET_PRICE':
        //     return state.map((drug) => {
        //         if (drug.drugId == action.drugId) {
        //             return {
        //                 ...drug,
        //                 ...action.price
        //             }
        //         }
        //         return drug; //musisz zwrocic niezmodyfikowane
        //     })
        // case 'REMOVE_DRUG':
        //      return state.filter(({ drugId }) => drugId !== action.drugId);

        default:
            return state;
    }
}

export default renderedDrugsReducer2;