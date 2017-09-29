import uuid from 'uuid';

//SET_PRICE
export const setPrice = (drugId, price) => ({
    type: 'SET_PRICE',
    drugId,
    price
})

//SET_ID
// export const setId = (id, drugId) => ({  //do przemyslenia czy price bedzie tu musial byc dodany domysllnie na undefined, testuj
//     type: 'SET_ID',
//     renderedDrugs: {
//         id,
//         drugId
//     }
// })

export function removeDrug(drugId){
    console.log('remove')
    return {
        type: 'REMOVE_DRUG',
        drugId
    }
}

export function setId(id, drugId, lat, lon) {
    //console.log('SETID dzialam')
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

export function test2(drugId){
    // console.log('test2')
    // removeDrug()
    console.log('id', drugId)
    return(dispatch) => {
        dispatch(removeDrug(drugId))
    }
}

export function test(drugs, fakePayload) {
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

export function setPriceTest(id,val){
    console.log(val)
    return (dispatch) => {
//console.log('dispatchuje')
        
        dispatch(setPrice(id, {price: val}))
    }
}


// export function test1(id, drugId) {
//     console.log('test2')
//     return dispatch => {
//         dispatch({
//             type: 'SET_ID',
//             renderedDrugs: {
//                 id,
//                 drugId
//             }
//         });


//     };
// }

// function getDrugs() {
//     return dispatch => {


