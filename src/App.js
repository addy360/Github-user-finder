import React, { Component, Fragment } from 'react';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Users from './components/users/Users'
import Search from './components/users/search/Search'
import Alert from './components/Alert/Alert'
import About from './components/pages/About/About'
import User from './components/users/User/User'
import './App.css';

class App extends Component {
  state={
    users:[],
    loading:false,
    alert:null,
    user:null,
    repos:null
  }
  searchUser = user=>{
     this.setState({loading:true})
    axios.get(`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_CLIENT}&client_secret=${process.env.REACT_APP_SECRET}`)
    .then(res=>{
      this.setState({users:res.data.items,loading:false})
    })
    .catch(err=>{console.log(err)})
  }
  clearUsers=()=>{
    this.setState({users:[], loading:false})
  }
  setAlert= (msg, type)=>{
    this.setState({alert:{msg,type}})
    setTimeout(()=>this.setState({alert:null}),3000)
  }
  getUser = async username=>{
    this.setState({loading:true})
    let res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT}&client_secret=${process.env.REACT_APP_SECRET}`)
      this.setState({user:res.data,loading:false})
  }
   getUserRepo = async username=>{
    this.setState({loading:true})
    let res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT}&client_secret=${process.env.REACT_APP_SECRET}`)
      this.setState({repos:res.data,loading:false})
  }
  render(){
    return (
        <Fragment>
          <Navbar icon="fab fa-github" title="Github User Finder"/>
          <div className="container">
            <Alert alert={this.state.alert} /> 
            <Switch>
              <Route path="/" exact render={props=>(
                <Fragment>
                  <Search {...props} clearUsers={this.clearUsers} searchUser={ this.searchUser } showClear={this.state.users.length > 0} setAlert={this.setAlert} />
                  <Users {...props} loading={this.state.loading} users={this.state.users}/>
                </Fragment>
              )} />
              <Route path="/about" component = {About} />
              <Route exact path="/user/:login" render={props=> <User getUserRepo={this.getUserRepo} repos={this.state.repos} getUser={this.getUser} loading={this.state.loading}   user={this.state.user} {...props} /> } />
            </Switch>
          </div>
        </Fragment>
      );
    }
  }

export default App;
