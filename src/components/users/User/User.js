import React, { useEffect, Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

import Spinner from '../../Spinner/Spinner'
import Repos from '../repos/Repos'
import GithubContect from '../../../context/github/githubContext'

const User = props=>{
	const { getUser, user, loading, getUserRepo } = useContext(GithubContect)
	useEffect(()=>{
		getUser(props.match.params.login)
		getUserRepo(props.match.params.login)
	// eslint-disable-next-line
	},[])

	
		if(loading){
			return <Spinner/>
		}else{
			const { 
				avatar_url,company,name, bio,location,blog,login,html_url,followers,following,public_repos,public_gists,hireable
			 } = user
			return (
				<Fragment>
					<Link to="/" className="btn btn-light" >Back to Search</Link>
					Hireable : {' '} { hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i> }
					<div className="card grid-2">
						<div className="all-center">
							<img src={avatar_url} className="round-img" alt={login} style={{width:'150px'}} />
							<h1>{name}</h1>
							<p>{location? `Location : ${location}`: null}</p>
						</div>
						<div>
							{bio && (
								<Fragment>
									<h3>Bio</h3>
									<p>{bio}</p>
								</Fragment>
							)}
							<a className="btn btn-primary my-1" href={html_url}>View Github Profile</a>
							<ul>
								<li>
									{login && (
										<Fragment>
											<strong>Username : </strong> {login}
										</Fragment>
									)}
								</li>
								<li>
									{company && (
										<Fragment>
											<strong>Company : </strong> {company}
										</Fragment>
									)}
								</li>
								<li> 
									{blog && (
										<Fragment>
											<strong>Website : </strong> {blog}  
										</Fragment>
									)}
								</li>
								
							</ul>
						</div>
					</div>

					<div className="card text-center">
						<div className="badge badge-primary">Followers: {followers}</div>
						<div className="badge badge-success">Following: {following}</div>
						<div className="badge badge-danger">Public repos: {public_repos}</div>
						<div className="badge badge-light">Public gists: {public_gists}</div>
					</div>

					<Repos />
				</Fragment>
			)

		} 
	}

export default User