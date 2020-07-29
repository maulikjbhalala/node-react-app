import {createStore} from 'redux';

// import StateData from './reduxState';

// import Reducer from './reduxReducer';

const stateData={

    name:'',
    age:null
};



const reducer=function(state=stateData,action)
{

    if(action.type==='FIRST_REDUX')
    {
        return {data:state.name.concat(action.payload)}
    }
    else if(action.type==='SECOND_REDUX')
    {
        return {data:state.age.concat(action.payload)}
    }
    return state;

}







//pass reducer to create a store
const store=createStore(reducer);

export default store;