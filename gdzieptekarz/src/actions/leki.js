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

export function sendRemoveFunction(drugId){
    return(dispatch) => {
        dispatch(removeDrug(drugId))
    }
}

export function drugMapper(drugs, fakePayload) {
    const rngPayloadId = Math.floor(Math.random() * 4);
    //console.log('dziala')
    return (dispatch) => {
        const payload = fakePayload.map((payload) => {
            //console.log('jestem w dispaczu')
            if (payload.payloadId === rngPayloadId) {
                //console.log('map')
                return payload.drugsId.map(id => { dispatch(setId(uuid(), id, payload.lat, payload.lon)) })
            }
            //dispatch(setId(3, 3))
        })
    }
    // dispatch(setId(id, drugId))
}

export function setPriceFunction(id,val){
    //console.log(val)
    return (dispatch) => {
        dispatch(setPrice(id, {price: val}))
    }
}
