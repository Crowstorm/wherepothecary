import React from 'react';
import uuid from 'uuid'

export default  ({drugs, picked, deleteDrug, sendDrugs}) => {
    
    //TWORZENIE LISTY LEKOW DO WYSLANIA DO API
    const pickedDrugs = picked.map(id => {
      console.log(picked)
        const name = id.a; //nie dodaje reszty, wole z palca nizej
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

