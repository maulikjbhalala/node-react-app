
import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);


    const increCount = (e) => {
        e.preventDefault();
        setCount(count + 1)
    }

    return [count, increCount]
};

export default Counter;
