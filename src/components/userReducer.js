import {getData} from './userActions';

const userState={
    names:[],
    name:''
};

//reducer function
 function userProvider(state=userState,action)
{
    switch(action.type)
    {

        case getData:
                    state.names=action.payload.names || ['maulik','mj'];
                    return state;
        default:
                    return state;            
    }
}


export default userProvider;