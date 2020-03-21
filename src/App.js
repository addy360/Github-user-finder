import React, {  Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Users from './components/users/Users'
import Search from './components/users/search/Search'
import Alert from './components/Alert/Alert'
import About from './components/pages/About/About'
import User from './components/users/User/User'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import './App.css';

const App = props=> {
    return (
        <GithubState>
          <AlertState>
            <Navbar icon="fab fa-github" title="Github User Finder"/>
            <div className="container">
              <Alert /> 
              <Switch>
                <Route path="/" exact render={props=>(
                  <Fragment>
                    <Search {...props} />
                    <Users {...props} />
                  </Fragment>
                )} />
                <Route path="/about" component = {About} />
                <Route exact path="/user/:login" render={props=> <User {...props} /> } />
              </Switch>
            </div>
           </AlertState> 
        </GithubState>
      );
    }
  

export default App;
