import React from 'react';
//import Price from './PanelComponents/price'
import { createStore, combineReducers } from 'redux';
import Leki from './PanelComponents/leki'
import AptekaRNG from './PanelComponents/aptekaRNG'
import {Provider}  from 'react-redux';

import uuid from 'uuid'

import fakePayload from '../../components/fakePayload/fakePayload'
import drugs from '../../components/data/drugs'

class WherepothecaryPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            apiDrugs: [
                {
                    id: '',
                    drugId: '',
                    price: ''
                }
            ]
        }
    }

    addApiDrug(id, drugId){
        //const {picked} = this.state;
        console.log('adding id', id);
        const apiDrugList = this.state.rendered.concat([id, drugId]);
        this.setState({
          rendered: apiDrugList
        })
      }

    render() {

        const apteki = this.props.apteki
        // const calculateDistance = (latU, lonU, latA, lonA) => {
        //     var R = 6371; // Radius of the earth in km
        //     var dLat = (latA - latU) * (Math.PI / 180);  // deg2rad below
        //     var dLon = (lonA - lonU) * (Math.PI / 180);
        //     var a =
        //         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        //         Math.cos((Math.PI / 180) * (latU)) * Math.cos((Math.PI / 180) * (latA)) *
        //         Math.sin(dLon / 2) * Math.sin(dLon / 2)
        //         ;
        //     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        //     var d = R * c; // Distance in km
        //     return d;
        // }


        return (
            <div>
                <div id='tymczasowe' className='col-xs-4'>
                    <p>Wylosowana apteka: </p>
                    <div>
                        {/* {listaAptek} */}
                        <AptekaRNG apteki={apteki}/>
                    </div>
                </div>

                <div className='col-xs-8'>
                    
                <table id='wherepothecaryPanel' >
                    <tbody>
                        <tr>
                            <td>ID Leku</td>
                            <td>Nazwa</td>
                            <td>Cena (zł)</td>
                            <td>Wyślij</td>
                            <td>Usuń</td>
                            <td>Odleglosc</td>
                        </tr>
                        
                    </tbody>

                </table>
                <Leki drugs={drugs} fakePayload={fakePayload}/>

                </div>

            </div>
        )
    }
}

export default WherepothecaryPanel