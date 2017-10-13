

//SET_PRICE
export const setPrice = (id, cena) => ({
    type: 'SET_PRICE',
    id,
    cena
})

//USUNIECIE LEKU Z TABELI I STORE (+ z API z poziomu glownego panelu)
export function removeDrug(id){
    return {
        type: 'REMOVE_DRUG',
        id
    }
}


//DODANIE LEKU DO STORE
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

//DO USUWANIA
export function sendRemoveFunction(drugId){
    return(dispatch) => {
        dispatch(removeDrug(drugId))
    }
}

//USTAWIENIE CENY
export function setPriceFunction(id,val){
    return (dispatch) => {
        dispatch(setPrice(id, {cena: val}))
    }
}

//USTAWIENIE LEKU
export function setApiDrug(drug2){
    return (dispatch) => {
        drug2.map( drug => dispatch(setDrug(drug._id, drug.A, drug.B, drug.C, drug.D, drug.E, drug.lat, drug.lon)))
    }
}