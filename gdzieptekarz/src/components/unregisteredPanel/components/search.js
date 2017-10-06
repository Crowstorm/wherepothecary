import React from 'react';

class Search extends React.Component {
    filterUpdate() {
        const searchValue = this.myValue.value;
        this.props.filterUpdate(searchValue);
    }

    numberOfDrugs(){
        const drugNumber = this.myValue.value;
        this.props.numberOfDrugs(drugNumber);
        console.log(drugNumber)
    }

    render() {

        return (
            <div>
                <form>
                    <input className='form-control' type='text'
                        ref={(value) => { this.myValue = value }}
                        placeholder='Type to search for products'
                        onChange={this.filterUpdate.bind(this)}>
                    </input>
                </form>
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