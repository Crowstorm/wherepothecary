import React from 'react';
import { combineReducers } from 'redux';
import Leki from './PanelComponents/leki'
import AptekaRNG from './PanelComponents/aptekaRNG'

import fakePayload from '../../components/fakePayload/fakePayload'
import drugs from '../../components/data/drugs'

class WherepothecaryPanel extends React.Component {
    constructor(props){
        super(props);
    }


    // Dziala tylko jesli dodam rozszerzenie https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US  do chrome'a. Bez tego nie dziala dopoki baza danych jest na moim PC


    render() {

        const apteki = this.props.apteki;

        return (
            <div>
                <div id='tymczasowe' className='col-xs-4'>
                    <p>Wylosowana apteka: </p>
                    <div>
                        <AptekaRNG apteki={apteki}/>
                    </div>
                </div>

                <div className='col-xs-8'>
                    
                <table id='wherepothecaryPanel' >
                    <tbody>
                        <tr>
                            <td>Nazwa</td>
                            <td>Postać</td>
                            <td>Dawka</td>
                            <td>Opakowanie</td>
                            <td>Producent</td>
                            <td>Cena (zł)</td>
                            <td>Wyślij</td>
                            <td>Usuń</td>
                            <td>Odleglosc</td>
                        </tr>
                        
                    </tbody>
                    <Leki drugs={drugs} fakePayload={fakePayload}/>

                </table>
                

                </div>

            </div>
        )
    }
}

export default WherepothecaryPanel