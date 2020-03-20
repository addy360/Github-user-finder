import React from 'react'
import RepoItem from './repoItem/RepoItem'
import Spinner from '../../Spinner/Spinner'

const Repos = props =>{

	if (props.repos === null ) {
		return <Spinner/>
	}else{
		return(
			props.repos.map(repo=><RepoItem key={repo.id} repo={repo} />)
		)
	}
}

export default Repos