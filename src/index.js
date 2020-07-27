import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Display from './components/empDisplay';
// import Add from './components/empAdd';
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'
// import Edit from './components/empEdit';
// import Delete from './components/empDelete';
// import Search from  './components/search';
// import Query from './components/query'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Filter from './components/empFilter';
// import EmpView from './components/empView';
// import Paginate from './components/empPagination';
import Func from './components/functional/addFunctional'
import GetFunctional from './components/functional/mountGetFunctional';
import RefCom from './components/ref/refComponent';
import FragCom from './components/fragment';

// lazy components
const App = React.lazy(() => import('./App'));
const Display=React.lazy(()=>import('./components/display/empDisplay'));
const Add=React.lazy(()=>import('./components/add/empAdd'));
const Edit=React.lazy(()=>import('./components/edit/empEdit'));
const Delete=React.lazy(()=>import('./components/delete/empDelete'));
const Query=React.lazy(()=>import('./components/singleView/query'));
const Filter=React.lazy(()=>import('./components/search/empFilter'));
const EmpView=React.lazy(()=>import('./components/singleView/empView'));
const Paginate=React.lazy(()=>import('./components/empPagination'));
const PageEmp=React.lazy(()=>import('./components/comp-1'));

// let routing = (
//   <React.Suspense fallback={<div>
//     <p>
//       Menu is loading.
//     </p>
//   </div>}>
//  <Router>
//     <div>
//       <div>
//         <ul className="header">
//           {/* {/* <li ><a aria-current="true" class="active" href="/">Home</a></li> */}

//           <li ><a aria-current="true" class="active" href="/">Home</a></li>
//            <li><a aria-current="true" class="active" href="/add">Add New Employee</a></li> 
//            <li><a aria-current="true" class="active" href="/show">Display Employees</a></li> 
//            <li><a aria-current="true" class="active" href="/filter">Search Employee</a></li> 
//         <li><a aria-current="true" class="active" href="/page">Pagination</a></li> 
//           {/* <li><a aria-current="true" class="active" href="/myDemo">new page</a></li> */}
//           <li><a aria-current="true" class="active" href="/myPage">react pagination</a></li>
//           <li><a aria-current="true" class="active" href="/ref">react ref</a></li>
//         </ul>
//       </div>

//      <Route exact path='/' component={App} />
//        <Route path='/add/' component={Add} />
//       <Route path='/show' component={Display} />
//       <Route path='/edit/:id' component={Edit}/>
//       <Route path='/delete/:id' component={Delete}/>
//       <Route path='/viewById/:id' component={EmpView}/>
//      <Route path='/filter' component={Filter}/>
//       <Route exact path='/view/' component={Query}/>
//       <Route  path='/page/:limit/:pageNo' component={Paginate}/>
//       <Route path='/myPage' component={PageEmp}/>
//       <Route path='/ref/' component={RefCom}/>
//       {/* <Route path='/myDemo' component={NewPagi}></Route> */}


//    </div>
//   </Router>
//   </React.Suspense>
 
// );






// ReactDOM.render(
//   routing,
//   document.getElementById('root')
// );


// ReactDOM.render(<Query/>,document.getElementById('root'));


// functional component
// ReactDOM.render(
//   <GetFunctional/>,document.getElementById('root')
// )



// ReactDOM.render(<GetFunctional/>,document.getElementById('root'));

ReactDOM.render(<FragCom/>,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
