import React from 'react';
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import { drugMapper, setPriceFunction, sendRemoveFunction } from '../../../actions/leki'

//import _ from 'lodash';


class Leki extends React.Component {
    componentWillMount() {
        const { fakePayload, drugs} = this.props;

        this.props.dispatch(drugMapper(drugs, fakePayload))
    }

    // getDrugs() {
    //     return data = _.get(this.props, 'renderedDrugs[0].drugId');
    // }

    getDrugs() {
        const l = this.props.renderedDrugs.length;
        const arrayOfDrugs = [];

        const calculateDistance = (latU, lonU, latA, lonA) => {
            var R = 6371; // Radius of the earth in km
            var dLat = (latA - latU) * (Math.PI / 180); 
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

        const handlePriceChange = (e) =>{
            return this.props.dispatch(setPriceFunction(e.target.name, e.target.value));
        }

        const handleSend = (e) => {
            this.props.dispatch(sendRemoveFunction(this.props.renderedDrugs[e.target.id].drugId))
            console.log(e.target.id, 'Wysylam lek o id ',this.props.renderedDrugs[e.target.id].id, ' ktory koztuje ', this.props.renderedDrugs[e.target.id].price )
        }

        const handleRemoveDrug = (e) => {
            console.log('We dont have this drug PLACEHOLDER')
            this.props.dispatch(sendRemoveFunction(this.props.renderedDrugs[e.target.id].drugId));
        }

        for (var i = 0; i < l; i++) {
            arrayOfDrugs.push(<tr key={this.props.renderedDrugs[i].id}>
                <td>{this.props.renderedDrugs[i].id}</td>
                <td>{this.props.renderedDrugs[i].name}</td>
                <td><input value={this.props.renderedDrugs[i].price} onChange={handlePriceChange} type="number" name={this.props.renderedDrugs[i].drugId} /></td>
                <td><button id={i} onClick={handleSend}>Send</button></td>
                <td><button id={i} onClick={handleRemoveDrug}>X</button></td>
                <td>{calculateDistance(this.props.renderedDrugs[i].lat, this.props.renderedDrugs[i].lon, this.props.apteka.latA, this.props.apteka.lonA).toFixed(1)} km </td>
            </tr>
            )
        }
        return arrayOfDrugs;
    }

    render() {
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
