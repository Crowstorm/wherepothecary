import React from 'react';
import leki from '../../data/leki.json';

import uuid from 'uuid'

export default  ({drugs, picked, deleteDrug, sendDrugs}) => {
    
    // console.log('data: ', drugs);

    const pickedDrugs = picked.map(id => {
      // id = id-1;
      console.log(picked)
        const name = id.a;
     console.log(name);
        return(
            <li onClick={()=>deleteDrug(id)} key={uuid()}>{name} {id.b} {id.c}, {id.d} {id.c}<button  className='btn'>Delete</button></li>
        )
     }) 
    return(
        <div className='text-center'>
            <div className='row'>
            <p> Selected products: </p>
            </div>
            <div className='row'>
                <ul>
                    {pickedDrugs}
                    <div className='row'>
                    {/* {przekaz propsy do buttona} */}
                    <button onClick={(id) => sendDrugs(id)} className='btn btn-primary btn-send'>Send</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

