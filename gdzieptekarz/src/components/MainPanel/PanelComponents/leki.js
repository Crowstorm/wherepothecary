import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setId, test } from '../../../actions/leki'
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

    // addDrugId(id, ajdi) {
    //     this.props.setId(id, ajdi)
    // }
    componentWillMount() {
        const { fakePayload, drugs, getDrugs } = this.props;

        //this.props.dispatch(test(1, 55));

        //this.props.dispatch(setId(3, 56))

        // setId(1, 55);

        // console.log(this.props);
        // const fakePayload = this.props.fakePayload;
        // const drugs = this.props.drugs;

        this.props.dispatch(test(drugs, fakePayload))

        // const rngPayloadId = Math.floor(Math.random() * 4);
        // const payload = fakePayload.map(payload => {
        //     if (payload.payloadId === rngPayloadId) {
        //         return payload.drugsId.map(id => { this.props.dispatch(setId(uuid(), id)) })
        //     }
        // });
    }

    // getDrugs() {
    //     return data = _.get(this.props, 'renderedDrugs[0].drugId');
    // }

    getTest() {

        console.log(this.props.renderedDrugs.id)
        const l = this.props.renderedDrugs.length;
        const ary = [];

        for (var i = 0; i < l; i++) {
            //ary.push(<div key={this.props.renderedDrugs[i].id}>{this.props.renderedDrugs[i].id}</div>);
            ary.push(<tr>
                <td>{this.props.renderedDrugs[i].id}</td>
                <td>{this.props.renderedDrugs[i].name}</td>
                <td><input value={undefined} type="number" name="price" /></td>
                <td><button>Send</button></td>
                <td><button>X</button></td>
                <td>DÓRZO</td>
                {/* <td>{this.calculateDistance(payload.lat, payload.lon, aptekaLat, aptekaLon).toFixed(1)} km </td> */}
            </tr>
            )
        }
        return ary;
    }

    render() {
        // const data = this.props.renderedDrugs ? this.getDrugs() : null;

        console.log('wypisuje propsy', this.props.renderedDrugs)

        //this.getTest()

        // const demo = this.props.renderedDrugs ? this.getTest() : null

        // const srest = () => {
        //     if(this.props.renderedDrugs){
        //         return <div>jest</div>
        //     } else {
        //         return  <div> pusto </div>
        //     }
        // }


        const pls = (this.props.renderedDrugs) ? this.getTest() : nie()

        function jest() {
            return 'jest'
        }

        function nie() {
            return 'nie'
        }
        return (
            <tbody>{pls}</tbody>
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

// class Leki extends React.Component {
//      constructor(props) {
//          super(props);
//          const fakePayload = this.props.fakePayload;
//          const drugs = this.props.drugs;

//         const rngPayloadId = Math.floor(Math.random() * 4);
//          const payload = fakePayload.map(payload => {
//              //dopasowanie losowego id
//              if (payload.payloadId === rngPayloadId) {
//                  //Na kazdy lek twordze oddzielna komorke
//                  return payload.drugsId.map(id => { props.dispatch(setId(uuid(), id)) })
//              }
//          })
//      }

//      // addDrugId(id, ajdi) {
//      //     this.props.setId(id, ajdi)
//      // }

//      render() {
//         if (this.props.hasErrored) {
//             return <p>Sorry! There was an error loading the items</p>;
//         }
//         if (this.props.isLoading) {
//             return <p>Loading…</p>;
//         }
//          return (

//              <div>{this.props.renderedDrugs[1].drugId}</div>
//          )
//      }
//  }
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
