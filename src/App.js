import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Private from './components/Private/Private';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div>
          <Route path='/' exact component={ Login }/>
          <Route path='/private' component={ Private }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
