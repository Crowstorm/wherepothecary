import React from 'react';
//import Price from './PanelComponents/price'
import { combineReducers } from 'redux';
import Leki from './PanelComponents/leki'
import AptekaRNG from './PanelComponents/aptekaRNG'

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
                    <Leki drugs={drugs} fakePayload={fakePayload}/>

                </table>
                

                </div>

            </div>
        )
    }
}

export default WherepothecaryPanel