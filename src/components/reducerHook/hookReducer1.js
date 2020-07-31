import React, { useContext } from 'react';
import { userContext } from './contextReducer';


const HookReducer1Com = () => {
    const data = useContext(userContext);
    const myClick = () => {
        data.countDispatch('Add');
    }

    return (
        <div>
            <button onClick={myClick}>
                add
            </button>
            <p>
                count is: {data.count}
            </p>
        </div>
    )
}




export default HookReducer1Com;