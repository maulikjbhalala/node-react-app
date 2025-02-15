import React, { Component } from 'react';
import logo from './logo.svg';
import nodeLogo from './images.jpeg'
import './App.css';
import {  Link, BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './components/userStore'

// import ContextProvider from './components/contextProvider';


  const App=()=>
  {
    return(
        <div className="App">
      <header className="App-header">
        <Provider store={store}>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={nodeLogo} />
          <h4><Link to="/add"><span  class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Employee</Link></h4>
        </Provider>
       
      </header>
    </div>
      
    )

  }

export default App;


