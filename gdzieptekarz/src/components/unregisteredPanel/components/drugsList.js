import React from 'react';
import leki from '../../data/leki.json';

import uuid from 'uuid'
class DrugsList extends React.Component {
    render() {

       //const { drugs, filterText, addDrug } = this.props;
        const drugs = this.props.drugs;
        const filterText = this.props.filterText;
        const addDrug = this.props.addDrug;

       // const leki = require('json!../../data/leki.json')

       console.log(leki[1].A)

    //    const lekiList = leki.filter(leki => {
    //        return leki.A.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
    //    }).map(leki => {
    //        return(
    //         <li className="list-group-item" key={leki.A} >{leki.A}<button className='btn btn-sm btn-success btn-drug' onClick={() => addDrug(drugs.id)}>Select</button></li>
    //        )
    //    })

       const dataList = [];
       let skip = 0;
       const max = 50;
       const filterLowerCase = filterText.toLowerCase(); // Do this *once*
       leki.some(function(entry) {
           if (entry.A.toLowerCase().indexOf(filterLowerCase) !== -1) {
               if (skip > 0) {
                   --skip;
               } else {
                   dataList.push(<li className="list-group-item" key={uuid()} >{entry.A}</li>);
                   if (dataList.length == max) {
                       return true; // Stop `some`, we have enough
                   }
               }
           }
           return false;
       });

        // const drugsList = drugs.filter(drugs => {
        //     //removing drugs that dont match
        //     return drugs.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
        // }).map(drugs => {
        //     return (
        //         <li className="list-group-item" key={drugs.id} >{drugs.name}<button className='btn btn-sm btn-success btn-drug' onClick={() => addDrug(drugs.id)}>Select</button></li>
        //     )
        // })

        console.log(dataList);

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