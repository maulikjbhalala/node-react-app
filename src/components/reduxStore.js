import {createStore} from 'redux';

// import StateData from './reduxState';

// import Reducer from './reduxReducer';

const stateData={

    name:'',
    age:null
};



const reducer=(state=stateData,action)=>
{
    switch(action.type)
    {
        case 'FIRST_REDUX':
            state.name=action.payload.name;
            state.age=action.payload.age || 20;
             return state;
        case 'SECOND_REDUX':
            state.age=action.payload.age || 21
            state.name= action.payload.name || 'demo name'
            return state;
        default:
            return state;
    }
    // if(action.type==='FIRST_REDUX')
    // {
    //     return {data:state.name.concat(action.payload)}
    // }
    // else if(action.type==='SECOND_REDUX')
    // {
    //     return {data:state.age.concat(action.payload)}
    // }
    // return state;

}







//pass reducer to create a store
const store=createStore(reducer);

export default store;