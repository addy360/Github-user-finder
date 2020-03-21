import React, { useReducer } from 'react'
import axios from 'axios'

import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

import {
	GET_REPOS,
	GET_USER,
	CLEAR_USERS,
	SET_LOADING,
	SEARCH_USERS,
} from '../types'

const GithubState = props=>{
	const initialState = {
		users:[],
		user:{},
		repos:[],
		loading:false
	}

	const [state, dispatch] = useReducer(GithubReducer, initialState)

	const setLoading = ()=> dispatch({type:SET_LOADING})

	const clearUsers=()=>dispatch({type:CLEAR_USERS})

	const searchUser = user=>{
	    setLoading()
	    axios.get(`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_CLIENT}&client_secret=${process.env.REACT_APP_SECRET}`)
	    .then(res=>{
	      dispatch({type:SEARCH_USERS, payload:res.data.items})
	    })
	    .catch(err=>{console.log(err)})
	  }

	const getUser = async username=>{
	    setLoading()
	    let res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT}&client_secret=${process.env.REACT_APP_SECRET}`)
	    dispatch({ type:GET_USER, payload: res.data})
	}

   const getUserRepo = async username=>{
	    setLoading()
	    let res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT}&client_secret=${process.env.REACT_APP_SECRET}`)
	    dispatch({type:GET_REPOS, payload:res.data})
	  }

	return (
		<GithubContext.Provider
			value={{
				users:state.users,
				user:state.user,
				repos:state.repos,
				loading:state.loading,
				searchUser,
				clearUsers,
				getUser,
				getUserRepo
			}}
		>
			{ props.children }
		</GithubContext.Provider>
	)
}

export default GithubState