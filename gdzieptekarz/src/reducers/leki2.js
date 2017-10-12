const renderedDrugsReducerDefState2 = {
    id: undefined,
    nazwa: undefined,
    postac: undefined,
    dawka: undefined,
    opakowanie: undefined,
    producent: undefined,
    cena: undefined,
    lat: undefined,
    lon: undefined
};

const renderedDrugsReducer2 = (state = renderedDrugsReducerDefState2, action) => {
    switch (action.type) {
        case 'SET_DRUG':
            return [
                ...state,
                action.renderedDrugs2
            ]
        case 'SET_PRICE':
            return state.map((drug) => {
                if (drug.id == action.id) {
                    return {
                        ...drug,
                        ...action.cena
                    }
                }
                return drug; //musisz zwrocic niezmodyfikowane
            })
         case 'REMOVE_DRUG':
             return state.filter(({ id }) => id !== action.id);

        default:
            return state;
    }
}

export default renderedDrugsReducer2;