import React from 'react';
import { connect } from 'react-redux'

class Leki extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const fakePayload = this.props.fakePayload;
        const drugs = this.props.drugs;
        const renderedDrugs = this.props.renderedDrugs

        const rngPayloadId = Math.floor(Math.random() * 4);

        console.log(fakePayload)

        const payload = fakePayload.map(payload => {
            //dopasowanie losowego id
            if (payload.payloadId === rngPayloadId) {
                //Na kazdy lek twordze oddzielna komorke
                return payload.drugsId.map(id => {
                    //ustaw jakos state
                    return <tr>
                        <td> {id}</td>
                        <td>{drugs[id].name}</td>
                        <td><input value={undefined} type="number" name="price" /></td>
                        <td><button >Send</button></td>
                        <td><button>X</button></td>
                        <td>DÓRZO</td>
                        {/* <td>{this.calculateDistance(payload.lat, payload.lon, aptekaLat, aptekaLon).toFixed(1)} km </td> */}
                    </tr>
                })
            }
        })

        return (
            <tbody>{payload}</tbody>
        )
    }
}

// const Leki = (props) => (
// //     const fakePayload = this.props.fakePayload;
// // const drugs = this.props.drugs;
// <div>
//     <h1>Tu beda leki</h1>
//     {props.renderedDrugs.length}, ,
//         {props.renderedDrugs[0].id}
// </div>
// )

const mapStateToProps = (state) => {
    return {
        renderedDrugs: state.renderedDrugs
    }
}

export default connect(mapStateToProps)(Leki)


// const ConnectedLeki = connect((state) => {
//     return {
//         renderedDrugs: state.renderedDrugs
//     }
// })(Leki);

// export default ConnectedLeki;