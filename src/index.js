import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Display from './components/display';
import Add from './components/add';
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'
import Demo from './components/demoCom'
// import QueryComponent from './components/paramsQuery';
import Edit from './components/edit';
import Delete from './components/delete';
import Search from  './components/search';
import Query from './components/query'
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/filter';

let routing = (
  <Router>
    <div>
      <div>
        <ul className="header">
          {/* for heroku API */}
          {/* <li ><a aria-current="true" class="active" href="/">Home</a></li>
          {/* <Link aria-current="true" to="/">Home</Link> */}
          {/* <li><a aria-current="true" class="active" href="/add">Add New User</a></li> */}
          {/* <Link to="/add">Add New User</Link> */}
          {/* <li><a aria-current="true" class="active" href="/show">Display Users</a></li> */} */}
          {/* <Link to="/show">Display Users</Link> */}
          {/* <li><a aria-current="true" class="active" href="/demo">Demo Component</a></li> */}

          {/* for local API */}
          <li ><a aria-current="true" class="active" href="/">Home</a></li>
          {/* <Link aria-current="true" to="/">Home</Link> */}
          <li><a aria-current="true" class="active" href="/add">Add New Employee</a></li>
          {/* <Link to="/add">Add New User</Link> */}
          <li><a aria-current="true" class="active" href="/show">Display Employees</a></li>
          <li><a aria-current="true" class="active" href="/filter">Search Employee</a></li>
          {/* <Link to="/show">Display Users</Link> */}
          {/* <li><a aria-current="true" class="active" href="/demo">Demo Component</a></li> */}
          {/* <NavLink to="/demo">Demo Component</NavLink> */}
          {/* <li><a aria-current="true" class="active" href="/maulik">Query</a></li> */}
          {/* <li><a aria-current="true" class="active" href="/search?q=">Search Employees</a></li> */}
        </ul>
      </div>

      <Route exact path='/' component={App} />
      <Route path='/add/' component={Add} />
      <Route path='/show' component={Display} />
      <Route path='/demo' component={Demo} />
      <Route path='/edit/:id' component={Edit}/>
      <Route path='/delete/:id' component={Delete}/>
      {/* <Route path='/search' component={Search} /> */}
      {/* <Router path='/search?q=' component={Query}/> */}
      <Route path='/filter' component={Filter}/>
    </div>
  </Router>
);




ReactDOM.render(
  routing,
  document.getElementById('root')
);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
