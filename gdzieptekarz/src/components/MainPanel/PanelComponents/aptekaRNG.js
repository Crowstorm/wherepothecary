import React from 'react';
import { connect } from 'react-redux'
import {setLat, setLon} from '../../../actions/apteka'

class AptekaRNG extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const apteki = this.props.apteki;
        
        const rngAptekaId = Math.floor(Math.random() * 5);

        const listaAptek = apteki.map(apteka => {
            if (apteka.id === rngAptekaId) {
                // aptekaLat = apteka.lat;
                // aptekaLon = apteka.lon;
                this.props.dispatch(setLat(apteka.lat));
                this.props.dispatch(setLon(apteka.lon));
                // console.log(this.props.getState());
                return (
                    <li key={apteka.name} >{apteka.name} mieszcząca się na ulicy {apteka.address}</li>
                )
            }
        })
        return(
            <div>{listaAptek}</div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        apteka: state.apteka
    }
}

export default connect(mapStateToProps)(AptekaRNG)