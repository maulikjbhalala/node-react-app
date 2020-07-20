import React, { Component } from 'react';
import logo from './logo.svg';
import nodeLogo from './images.jpeg'
import './App.css';
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={nodeLogo} />
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          {/* <a
            className="App-link"
            href="/add"
            target="_blank"
            rel="noopener noreferrer"
          >
         Add Employee
          </a> */}
          {/* <Link to="/add">Add Employee</Link> 
           */}
            <h4><Link to="/add"><span  class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Go to Add User</Link></h4>
        </header>
      </div>
    );
  }
}

export default App;