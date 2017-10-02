import React from 'react';
import leki from '../../data/leki.json';

import uuid from 'uuid'
class DrugsList extends React.Component {
    render() {

       //const { drugs, filterText, addDrug } = this.props;

        const filterText = this.props.filterText;
        const addDrug = this.props.addDrug;
        const numberOfDrugs = this.props.numberOfDrugs


       const dataList = [];
       let skip = 0;
       //Ile lekow na stronie pobrane ze state
       const max = numberOfDrugs;
       const filterLowerCase = filterText.toLowerCase(); 
       leki.some(function(entry) {
           if (entry.A.toLowerCase().indexOf(filterLowerCase) !== -1) {
               if (skip > 0) {
                   --skip;
               } else {
                   dataList.push(<li className="list-group-item" key={uuid()} >{entry.A} {entry.B} {entry.C}, {entry.D} {entry.E}<button className='btn btn-sm btn-success btn-drug' onClick={() => addDrug(entry.A, entry.B,entry.C,entry.D,entry.E)}>Select</button></li>);
                   if (dataList.length == max) {
                       return true; 
                   }
               }
           }
           return false;
       });

//         {
//    "A": "NAZWA",
//    "B": "POSTAC",
//    "C": "DAWKA",
//    "D": "OPAKOWANIE",
//    "E": "PRODUCENT"
//  },


        // const dataListRender = (numberOfDrugs) ? {dataList} : notRendered()

        // function notRendered() {
        //     return 'Not rendered yet'
        // }

        return (
            <div>
                <ul className='list-group'>
                    {/* {drugsList} */}
                    {dataList}
                </ul>
            </div>
        );
    }
}

export default DrugsList;