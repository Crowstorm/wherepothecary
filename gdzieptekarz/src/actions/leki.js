//import uuid from 'uuid';

//SET_PRICE
export const setPrice = (id, cena) => ({
    type: 'SET_PRICE',
    id,
    cena
})

export function removeDrug(id){
    return {
        type: 'REMOVE_DRUG',
        id
    }
}


//api version
export function setDrug(id, nazwa, postac, dawka, opakowanie, producent, lat, lon) {
    return {
        type: 'SET_DRUG',
        renderedDrugs2: {
            id,
            nazwa,
            postac,
            dawka,
            opakowanie,
            producent,
            lat,
            lon
        }
    }
}

export function sendRemoveFunction(drugId){
    return(dispatch) => {
        dispatch(removeDrug(drugId))
    }
}

export function setPriceFunction(id,val){
    console.log(val)
    return (dispatch) => {
        dispatch(setPrice(id, {cena: val}))
    }
}


export function setApiDrug(drug2){
    return (dispatch) => {
        drug2.map( drug => dispatch(setDrug(drug._id, drug.A, drug.B, drug.C, drug.D, drug.E, drug.lat, drug.lon)))
    }
}