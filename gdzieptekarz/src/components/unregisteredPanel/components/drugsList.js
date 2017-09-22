import React from 'react';

class DrugsList extends React.Component {
    render() {

       //const { drugs, filterText, addDrug } = this.props;
        const drugs = this.props.drugs;
        const filterText = this.props.filterText;
        const addDrug = this.props.addDrug;

        const drugsList = drugs.filter(drugs => {
            //removing drugs that dont match
            return drugs.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
        }).map(drugs => {
            return (
                <li className="list-group-item" key={drugs.id} >{drugs.name}<button className='btn btn-sm btn-success btn-drug' onClick={() => addDrug(drugs.id)}>Select</button></li>
            )
        })

        return (
            <div>
                <ul className='list-group'>
                    {drugsList}
                </ul>
            </div>
        );
    }
}

export default DrugsList;