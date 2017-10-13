import React from 'react';
import { connect } from 'react-redux'
import { setLat, setLon, setName } from '../../../actions/apteka'


//USUNALEM LOSOWANIE MIEDZY 4 APTEKAMI, USTAWILEM 1 DOMYSLNA. COMPONENT DO USUNIECIA PO DODANIU REJESTRACJI
class AptekaRNG extends React.Component {
    constructor(props) {
        super(props)
        //ustawienie polozenia geograficznego do store
        this.props.dispatch(setLat(this.props.apteki[1].lat));
        this.props.dispatch(setLon(this.props.apteki[1].lon));
        //nazwa i adres do store
        this.props.dispatch(setName(this.props.apteki[1].name, this.props.apteki[1].address ));
    }

    
    render() {
        return (
             <div key={this.props.apteki[1].name} >{this.props.apteki[1].name} mieszcząca się na ulicy {this.props.apteki[1].address}</div>        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        apteka: state.apteka
    }
}

export default connect(mapStateToProps)(AptekaRNG)