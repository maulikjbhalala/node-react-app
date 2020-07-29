import stateData from './reduxState';

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

export default reducer;