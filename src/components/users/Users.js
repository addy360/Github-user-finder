import React from 'react'
import UserItem from './userItem/UserItem'
import Spinner from '../Spinner/Spinner'

const Users = props=>{
		return props.loading ? <Spinner/> : (
			<div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gridGap:"1rem"}}>
				{props.users.map(user=>(
					<UserItem key={user.id} user={user}/>
				))}
			</div>
		)
	}

export default Users