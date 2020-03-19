import React, { Component, Fragment } from 'react';
import axios from 'axios'

import Navbar from './components/Navbar/Navbar'
import Users from './components/users/Users'
import './App.css';

class App extends Component {
  state={
    users:[],
    loading:false
  }
  componentDidMount(){
    this.setState({loading:true})
    axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT}&client_secret=${process.env.REACT_APP_SECRET}`)
    .then(res=>{
      this.setState({users:res.data,loading:false})
    })
    .catch(err=>{console.log(err)})
  }
  render(){
    return (
        <Fragment>
          <Navbar icon="fab fa-github" title="Github User Finder"/>
          <div className="container">
            <Users loading={this.state.loading} users={this.state.users}/>
          </div>
        </Fragment>
      );
    }
  }

export default App;
