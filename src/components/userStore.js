import {createStore} from 'redux';

import Reducer from './userReducer'

// const userState={
//     names:[]
// };



const store=createStore(Reducer)


export default store;