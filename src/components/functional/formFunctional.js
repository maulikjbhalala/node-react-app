import React, { useState } from 'react';
import ButtonFunc from './buttonFunctionl';

const FormFunc=()=>
{


    const [name,changeName]=useState('maulik');
    const [email,changeEmail]=useState('noemail@gmail.com')
    const [count,setCount]=useState(0)
    
    const changeHandler=(event)=>
    {
        changeName(event.target.value)
    };

    


    const emailHandler=(event)=>
    {
        changeEmail(event.target.value)
    };

    const buttonHandler=()=>
    {
        setTimeout(() => {
            setCount(count+1);
        }, 1000);
        
    }


    const decreCountHandle=()=>
    {
        setCount(count-1)
    };

  
    return(
        <div>
        <div>Name Is {name}</div>
        <div>Email Is{email}</div>
        <div>count is{count}</div>
        <Fom handle={changeHandler}  name={name} email={email} handleMail={emailHandler} buttonClick={buttonHandler} decreCount={decreCountHandle}/>
        <ButtonFunc></ButtonFunc>
        </div>
        
    )

};

const Fom=({handle,handleMail,data,email,buttonClick,decreCount})=>
    {
    return(
        <div>

            <form >
            <input type='text' id='name' value={data} onChange={handle}></input>
            <input type='email' id='email' value={email} onChange={handleMail}></input>
            <button type='button' onClick={buttonClick}>increment</button>
            <button type='button' onClick={decreCount}>decrement</button>
        </form>

        </div>
    )

};


export default FormFunc;