import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Display from './components/empDisplay';
import Add from './components/empAdd';
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'
import Demo from './components/demoCom'
// import QueryComponent from './components/paramsQuery';
import Edit from './components/empEdit';
import Delete from './components/empDelete';
import Search from  './components/search';
import Query from './components/query'
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/empFilter';
import EmpView from './components/empView';
import Paginate from './components/empPagination';
import Func from './components/addFunctional'
import GetFunctional from './components/mountGetFunctional';

// let routing = (
//   <Router>
//     <div>
//       <div>
//         <ul className="header">
//           {/* {/* <li ><a aria-current="true" class="active" href="/">Home</a></li> */}

//           <li ><a aria-current="true" class="active" href="/">Home</a></li>
//            <li><a aria-current="true" class="active" href="/add">Add New Employee</a></li> 
//            <li><a aria-current="true" class="active" href="/show">Display Employees</a></li> 
//            <li><a aria-current="true" class="active" href="/filter">Search Employee</a></li> 
//         <li><a aria-current="true" class="active" href="/page">Pagination</a></li> 
//           <li><a aria-current="true" class="active" href="/myDemo">new page</a></li>
//         </ul>
//       </div>

//      <Route exact path='/' component={App} />
//        <Route path='/add/' component={Add} />
//       <Route path='/show' component={Display} />
//       <Route path='/demo' component={Demo} />
//       <Route path='/edit/:id' component={Edit}/>
//       <Route path='/delete/:id' component={Delete}/>
//       <Route path='/viewById/:id' component={EmpView}/>
//      <Route path='/filter' component={Filter}/>
//       <Route exact path='/view/' component={Query}/>
//       <Route  path='/page/:limit/:pageNo' component={Paginate}/>
//       <Route path='/myDemo' component={NewPagi}></Route>


//    </div>
//   </Router>
// );






// ReactDOM.render(
//   routing,
//   document.getElementById('root')
// );


// ReactDOM.render(<Query/>,document.getElementById('root'));


//functional component
// ReactDOM.render(
//   <Func/>,document.getElementById('root')
// )



ReactDOM.render(<GetFunctional/>,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
