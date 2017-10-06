import React from 'react';

class Search extends React.Component {
    filterUpdate() {
        const searchValue = this.myVal.value;
        this.props.filterUpdate(searchValue);
        console.log(searchValue)
    }

    numberOfDrugs(){
        const drugNumber = this.myValue.value;
        this.props.numberOfDrugs(drugNumber);
        console.log(drugNumber)
    }

    render() {

        return (
            <div>
                <p>Type to search for products</p>
                <form>
                    <input className='form-control' type='text'
                        ref={(value) => { this.myVal = value }}
                        placeholder='Type to search for products'
                        onChange={this.filterUpdate.bind(this)}>
                    </input>
                </form>
                <p>How many drugs are displayed on site</p>
                <form>
                    <input className='form-control' type='number'
                        ref={(value) => { this.myValue = value }}
                        placeholder='How many drugs are displayed on site'
                        onChange={this.numberOfDrugs.bind(this)}
                    >
                    </input>
                </form>
            </div>

        )
    }
}

export default Search;