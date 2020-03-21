import React, { useContext } from 'react'
import UserItem from './userItem/UserItem'
import Spinner from '../Spinner/Spinner'
import GithubContext from '../../context/github/githubContext'

const Users = props=>{
		const { users, loading } = useContext(GithubContext)
		return loading ? <Spinner/> : (
			<div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gridGap:"1rem"}}>
				{users.map(user=>(
					<UserItem key={user.id} user={user}/>
				))}
			</div>
		)
	}

export default Users