
import React, { useState } from 'react';
import useDocTitle from './docTitleHook';
import CountDisplay1 from './countDisplay';
import CountDisplay2 from './counterDisplay2';
import useCounterHook from './useCounterHook';

const Counter = () => {
    const [count, increCount] = useCounterHook(0)

    useDocTitle(count);


    return (
        <div>
            <CountDisplay1 count={count} />
            <CountDisplay2 count={count} />
            <button type="button" onClick={increCount}>
                Increment
            </button>
        </div>
    )
};

export default Counter
