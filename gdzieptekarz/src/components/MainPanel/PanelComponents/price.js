import React from 'react'

export default class Price extends React.Component{
    constructor(props){
        super(props);

        this.state={
            price: ''
        }
    }

    handlePriceChange(e){
        this.setState({
            price: e.target.value
        })
    }

    render(){
        return(
            <input value={this.state.price} onChange={this.handlePriceChange.bind(this)} type="number" name="price" />
        )
    }
}