import React, {Component} from 'react';
import './assets/main.css'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import MainLayout from './views/MainLayout'
class App extends Component {

  render(){
    return(
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>

          <Route path="/home" render = {props => <Home {...props} />} />  
          <Route path="/login" render={props => <Login {...props}  />} />
          <Route path="/register" render={props => <Register {...props} />} />
          <Route path="/app" render ={props => <MainLayout {...props} />} />

        <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
