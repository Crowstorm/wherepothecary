import React from 'react';

class Search extends React.Component{
    filterUpdate() {
        const searchValue = this.myValue.value;
        this.props.filterUpdate(searchValue);
    }

    render(){
        
        return(
            <form>
                <input className='form-control' type='text' 
                ref={(value) => {this.myValue = value}} 
                placeholder='Type to search for products' 
                onChange={this.filterUpdate.bind(this)}>
                </input>
            </form>
        )
    }
}

export default Search;