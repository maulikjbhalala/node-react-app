import React, { useContext } from 'react';
import { userContext } from './contextReducer';


const HookReducer2Com = () => {
    const data = useContext(userContext);
    const myClick = () => {
        data.countDispatch('Sub');
    }

    return (
        <div>
            <button onClick={myClick}>
                sub
            </button>
            <p>
                count is: {data.count}
            </p>
        </div>
    )
}




export default HookReducer2Com;