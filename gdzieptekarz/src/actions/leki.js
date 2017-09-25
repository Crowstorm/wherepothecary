//SET_ID
export const setId = (id, drugId) => ({  //do przemyslenia czy price bedzie tu musial byc dodany domysllnie na undefined, testuj
    type: 'SET_ID',
    renderedDrugs: {
        id,
        drugId
    }
})

//SET_PRICE
export const setPrice = (drugId, price) => ({
    type: 'SET_PRICE',
    drugId,
    price
})