import React, { useContext } from 'react'
import RepoItem from './repoItem/RepoItem'
import Spinner from '../../Spinner/Spinner'
import GithubContext from '../../../context/github/githubContext'

const Repos = props =>{
	const { repos } = useContext(GithubContext)
	if (repos === null ) {
		return <Spinner/>
	}else{
		return(
			repos.map(repo=><RepoItem key={repo.id} repo={repo} />)
		)
	}
}

export default Repos