import React from 'react';


export default  ({drugs, picked, deleteDrug, sendDrugs}) => {
    
    // console.log('data: ', drugs);

    const pickedDrugs = picked.map(id => {
      // id = id-1;
       console.log(id);
        const name = drugs[id].name;
        // console.log(name);
        return(
            <li onClick={()=>deleteDrug(id)} key={id}>{name}<button  className='btn'>Delete</button></li>
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

