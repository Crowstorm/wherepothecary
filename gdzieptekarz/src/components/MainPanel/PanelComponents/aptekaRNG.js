import React from 'react';
import { connect } from 'react-redux'
import { setLat, setLon, setName } from '../../../actions/apteka'


class AptekaRNG extends React.Component {
    constructor(props) {
        super(props)
        this.props.dispatch(setLat(this.props.apteki[0].lat));
        this.props.dispatch(setLon(this.props.apteki[0].lon));
        this.props.dispatch(setName(this.props.apteki[0].name, this.props.apteki[0].address ));
    }

    
    render() {
        return (
             <div key={this.props.apteki[0].name} >{this.props.apteki[0].name} mieszcząca się na ulicy {this.props.apteki[0].address}</div>        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        apteka: state.apteka
    }
}

export default connect(mapStateToProps)(AptekaRNG)