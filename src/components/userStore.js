import {createStore} from 'redux';

import Reducer from './userReducer-1'

// const userState={
//     names:[]
// };



const store=createStore(Reducer)


export default store;