import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './Red_Team/Page/Login/login';
import {Dashboard} from './Red_Team/Page/Dashboard';
import {AppLayout} from './Red_Team/Page/AppLayout';
import {Protect} from './Red_Team/Page/protect';


class App extends Component {
 

  render() {
    
    return (
      <div>
          <Route exact path="/" component={Login}/>
          <Protect exact path="/Dashboard" component={Dashboard}/>
          <Protect exact path="/layout" component={AppLayout}/>
      </div>
    );
  }
 
}
export default App;