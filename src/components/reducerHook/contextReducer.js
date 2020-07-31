import React, { useReducer } from 'react';
import Reducer1Com from './hookReducer1'
import Reducer2Com from './hookReducer2'
export const userContext = React.createContext();

const initialState = 0;

const Reducer = (state, action) => {
    switch (action) {
        case 'Add':
            return { state: state + 1 }
        case 'Sub':
            return { state: state - 1 }
        default:
            return state
    }

};

const MyContext = () => {
    const [count, dispatch] = useReducer(Reducer, initialState)

    return (
        <userContext.Provider value={{ count: count, countDispatch: dispatch }}>
            <Reducer1Com />
            <Reducer2Com />
        </userContext.Provider>
    )

};


export default MyContext