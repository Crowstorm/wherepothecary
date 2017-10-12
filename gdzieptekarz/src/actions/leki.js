import uuid from 'uuid';

//SET_PRICE
export const setPrice = (drugId, price) => ({
    type: 'SET_PRICE',
    drugId,
    price
})

export function removeDrug(drugId){
    return {
        type: 'REMOVE_DRUG',
        drugId
    }
}

export function setId(id, drugId, lat, lon) {
    return {
        type: 'SET_ID',
        renderedDrugs: {
            id,
            drugId,
            lat,
            lon
        }
    }
}

//api version
export function setDrug(id, nazwa, postac, dawka, opakowanie, producent) {
    return {
        type: 'SET_DRUG',
        renderedDrugs2: {
            id,
            nazwa,
            postac,
            dawka,
            opakowanie,
            producent
        }
    }
}

export function sendRemoveFunction(drugId){
    return(dispatch) => {
        dispatch(removeDrug(drugId))
    }
}

export function drugMapper(drugs, fakePayload) {
    const rngPayloadId = Math.floor(Math.random() * 4);
    return (dispatch) => {
        const payload = fakePayload.map((payload) => {
            if (payload.payloadId === rngPayloadId) {
                return payload.drugsId.map(id => { dispatch(setId(uuid(), id, payload.lat, payload.lon)) })
            }
        })
    }
}

export function setPriceFunction(id,val){
    //console.log(val)
    return (dispatch) => {
        dispatch(setPrice(id, {price: val}))
    }
}


export function test(drug2){
    //console.log(drug);
    return (dispatch) => {
        drug2.map( drug => dispatch(setDrug(drug._id, drug.A, drug.B, drug.C, drug.D, drug.E)))
    }
}