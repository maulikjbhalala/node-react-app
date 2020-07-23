import React, { useState, useEffect } from 'react';
import FormCom from './formFunctional'
import FormFunc from './formFunctional';

//write component function by ES6 syntax
const  FunctionalAdd=()=>
{


     const [name,setName]=useState('maulik')


     useEffect(()=>
     {

        setName('mj bhalala')
     });


    let a=5;
    let b=6;
    return <div> <MyComo dara='mj' c={a+b} name={name}/>
    </div>

}
//if we want to use props in our functional components, then we have to pass it in ()

//another way to pass prop is giving props value in component function itself as parameter
const MyComo=({c,dara,name})=>
{

    return(
        <h4>
           props value is {dara}
           <br></br>
        sum is<h3 style={{color:'green'}}> {c}</h3> 
        <h5> your name is {name}</h5>
        <FormFunc/>
        {/* <h1> add component will ends here</h1> */}
        </h4>

    )
}

export default FunctionalAdd