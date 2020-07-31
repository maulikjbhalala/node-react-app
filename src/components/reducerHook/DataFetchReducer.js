import React, { useReducer, useState, useEffect } from 'react';
import Axios from 'axios';

const InitialState = {
    names: [],
    isNull: false
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'FATCH_DATA':
            return { names: action.payload, isNull: true }
        default:
            return state;
    }

};


const FetchReducer = () => {


    const [data, dispatch] = useReducer(reducer, InitialState);
    useEffect(() => {
        const fetchData = async () => {
            const getData = await Axios.get('https://test-api-mauik.herokuapp.com/users');
            dispatch({ type: 'FATCH_DATA', payload: getData.data.data })
        }
        fetchData()
    }, []);

    return (
        <div>
            {console.log('names are', data.names)}
        </div>
    )

};


export default FetchReducer;

