import React from 'react'
import RepoItem from './repoItem/RepoItem'

const Repos = props =>{

	return(
		props.repos.map(repo=><RepoItem key={repo.id} repo={repo} />)
	)
}

export default Repos