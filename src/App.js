import React, { Component, Fragment } from 'react';
import axios from 'axios'

import Navbar from './components/Navbar/Navbar'
import Users from './components/users/Users'
import Search from './components/users/search/Search'
import Alert from './components/Alert/Alert'
import './App.css';

class App extends Component {
  state={
    users:[],
    loading:false,
    alert:null
  }
  searchUser = user=>{
     this.setState({loading:true})
    axios.get(`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_CLIENT}&client_secret=${process.env.REACT_APP_SECRET}`)
    .then(res=>{
      this.setState({users:res.data.items,loading:false})
      console.log(res)
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
  render(){
    return (
        <Fragment>
          <Navbar icon="fab fa-github" title="Github User Finder"/>
          <div className="container">
            <Alert alert={this.state.alert} />
            <Search clearUsers={this.clearUsers} searchUser={ this.searchUser } showClear={this.state.users.length > 0} setAlert={this.setAlert} />
            <Users loading={this.state.loading} users={this.state.users}/>
          </div>
        </Fragment>
      );
    }
  }

export default App;
