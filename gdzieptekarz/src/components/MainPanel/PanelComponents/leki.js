import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setId, test, setPriceTest } from '../../../actions/leki'
import Price from './price'
//import configureStore from '../../../store/configureStore' //STORE
import _ from 'lodash';
import uuid from 'uuid';


// const Leki = (props) => {
//         const addDrugId = (id, ajdi) => {
//         props.dispatch(setId(id, ajdi))
//     }
//         const fakePayload = props.fakePayload;
//         const drugs = props.drugs;

//         test(5, 55);

//         const rngPayloadId = Math.floor(Math.random() * 4);

//         const payload = fakePayload.map(payload => {
//             //dopasowanie losowego id
//             if (payload.payloadId === rngPayloadId) {
//                 //Na kazdy lek twordze oddzielna komorke
//                 return payload.drugsId.map(id => {

//                     return <tr>
//                         {/* {props.dispatch(setId(uuid(), id))} */}
//                         <td>{id}</td>
//                         <td>{drugs[id].name}</td>
//                         <td><input value={undefined} type="number" name="price" /></td>
//                         <td><button onClick={() => addDrugId(uuid(), id)}>Send</button></td>
//                         <td><button>X</button></td>
//                         <td>DÓRZO</td>
//                         {/* <td>{this.calculateDistance(payload.lat, payload.lon, aptekaLat, aptekaLon).toFixed(1)} km </td> */}
//                     </tr>
//                 })
//             }
//         })

//         return(
//             <tbody>{payload}</tbody>
//         )
// }


class Leki extends React.Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
        const { fakePayload, drugs, getDrugs } = this.props;
        setPriceTest();

        this.props.dispatch(test(drugs, fakePayload))
    }

    // getDrugs() {
    //     return data = _.get(this.props, 'renderedDrugs[0].drugId');
    // }

    getDrugs() {
        const l = this.props.renderedDrugs.length;
        const arrayOfDrugs = [];

        const calculateDistance = (latU, lonU, latA, lonA) => {
            var R = 6371; // Radius of the earth in km
            var dLat = (latA - latU) * (Math.PI / 180);  // deg2rad below
            var dLon = (lonA - lonU) * (Math.PI / 180);
            var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos((Math.PI / 180) * (latU)) * Math.cos((Math.PI / 180) * (latA)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km
            return d;
        }

        const firePriceChange = (e) =>{
            console.log('target', e.target)
            return this.props.dispatch(setPriceTest(e.target.name, e.target.value));
        }

        for (var i = 0; i < l; i++) {
            arrayOfDrugs.push(<tr key={this.props.renderedDrugs[i].id}>
                <td>{this.props.renderedDrugs[i].id}</td>
                <td>{this.props.renderedDrugs[i].name}</td>
                <td><input value={this.props.renderedDrugs[i].price} onChange={firePriceChange} type="number" name={this.props.renderedDrugs[i].drugId} /></td>
                {/* <td>{Price}</td> */}
                <td><button>Send</button></td>
                <td><button>X</button></td>
                <td>{calculateDistance(this.props.renderedDrugs[i].lat, this.props.renderedDrugs[i].lon, this.props.apteka.latA, this.props.apteka.lonA).toFixed(1)} km </td>
            </tr>
            )
        }
        return arrayOfDrugs;
    }

    render() {
        // const data = this.props.renderedDrugs ? this.getDrugs() : null;

        console.log('wypisuje propsy', this.props.renderedDrugs)

        // const demo = this.props.renderedDrugs ? this.getTest() : null
        const tableOfDrugsRender = (this.props.renderedDrugs) ? this.getDrugs() : notRendered()

        function notRendered() {
            return 'Not rendered yet'
        }
        return (
            <tbody>{tableOfDrugsRender}</tbody>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     getDrugs: () => {
//         dispatch(getDrugs())
//     },
//     setId2: (id, id) => {
//         dispatch(setId(id, id))
//     },
//     setId3: (id, id) => {
//         dispatch(setId(id, id))
//     },
//     setId4: (id, id) => {
//         dispatch(setId(id, id))
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({setId, test}, dispatch)
// }

const mapStateToProps = (state) => {
    return {
        apteka: state.apteka,
        renderedDrugs: state.renderedDrugs
    }
}

export default connect(mapStateToProps)(Leki)
