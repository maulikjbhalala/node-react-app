import React, { useState, useEffect } from 'react'
const CounterHook = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    const dataClick = () => {
        setCount(count + 1);
    };


    useEffect(() => {
        console.log('updates');

        // return () => {

        // };

    }, [count]);


    return (
        <div>
            <p>
                count is {count}
            </p>
            <input type='text' name='name' onChange={e => { setName(e.target.value) }}>

            </input>
            <button onClick={dataClick}>
                click here
            </button>
        </div>
    )
}

export default CounterHook
