import React from 'react';

const ButtonFunc=()=>
{
    const newFunc=()=>
    {
        console.log('click from button function.')
    };

    return(
    <CallFromHere click={newFunc}></CallFromHere>
    // <
    );

};



const CallFromHere=({click})=>
{
    return(
        <div>
            <p>
                <button type='button'  onClick={click} >Button</button>
            </p>
        </div>
    )



};
CallFromHere.defaultProps = {
    click: () => console.log('Default'),
  };


export default ButtonFunc;