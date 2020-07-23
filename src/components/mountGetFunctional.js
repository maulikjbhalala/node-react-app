import Axios from 'axios';

// import 
import React, { useEffect, useState } from 'react';



const GetAPICall =()=>
{
    const [name,setName]=useState('');
    const [count,setCount]=useState(0);
    const [data,setData]=useState([]);

    const dataChange=(e)=>
    {
        setName(e.target.value)
    };




    // useEffect(()=>
    // {
    //     setName('mau',[])
    //     // setCount(count+1)

    // }); 

    useEffect(()=>
    {
        setData([]);
       Axios.get('http://localhost:5600/d').then((result)=>
       {
        console.log('result is',result)
        setData(result.data.depts);
       })
       
    })



    const incrementCount=()=>
    {
        setCount(count+1)
    };

    


    return(
        <div>
            <h1>input form:</h1>
            <form >
                <p>name:</p>
                <input type='text' id='name'  onChange={dataChange}></input>
                <button type='button' onClick={incrementCount}>increment</button>
            </form>
            <div >
                name is <h3 style={{color:'brown'}}>{name}</h3>
                count <h3>{count}</h3>
                </div>
                <div>
                    {console.log('array',data)}
                    {data.map((dataObj)=>
                    
                        // {console.log('data',dataObj)}
                        <h1>{dataObj}</h1>

                    )}
                </div>
        </div>
    )

};


export default GetAPICall;