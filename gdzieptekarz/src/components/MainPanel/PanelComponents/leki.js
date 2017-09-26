import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setId } from '../../../actions/leki'
//import configureStore from '../../../store/configureStore' //STORE


import uuid from 'uuid'


const Leki = (props) => {
        const addDrugId = (id, ajdi) => {
        props.dispatch(setId(id, ajdi))
    }
        const fakePayload = props.fakePayload;
        const drugs = props.drugs;

        const rngPayloadId = Math.floor(Math.random() * 4);

        const payload = fakePayload.map(payload => {
            //dopasowanie losowego id
            if (payload.payloadId === rngPayloadId) {
                //Na kazdy lek twordze oddzielna komorke
                return payload.drugsId.map(id => {
                    
                    return <tr>
                        {/* {props.dispatch(setId(uuid(), id))} */}
                        <td>{id}</td>
                        <td>{drugs[id].name}</td>
                        <td><input value={undefined} type="number" name="price" /></td>
                        <td><button onClick={() => addDrugId(uuid(), id)}>Send</button></td>
                        <td><button>X</button></td>
                        <td>DÓRZO</td>
                        {/* <td>{this.calculateDistance(payload.lat, payload.lon, aptekaLat, aptekaLon).toFixed(1)} km </td> */}
                    </tr>
                })
            }
        })

        return(
            <tbody>{payload}</tbody>
        )
}


// class Leki extends React.Component {
//     constructor(props) {
//         super(props);
//         const fakePayload = this.props.fakePayload;
//         const drugs = this.props.drugs;

//         const rngPayloadId = Math.floor(Math.random() * 4);
//         const payload = fakePayload.map(payload => {
//             //dopasowanie losowego id
//             if (payload.payloadId === rngPayloadId) {
//                 //Na kazdy lek twordze oddzielna komorke
//                 return payload.drugsId.map(id => { props.dispatch(setId(uuid(), id)) })
//             }
//         })
//     }

//     // addDrugId(id, ajdi) {
//     //     this.props.setId(id, ajdi)
//     // }

//     render() {

//         return (
//             <div>{this.props.renderedDrugs[1].drugId}</div>
//         )
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setId }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        apteka: state.apteka,
        renderedDrugs: state.renderedDrugs
    }
}

export default connect(mapStateToProps)(Leki)
