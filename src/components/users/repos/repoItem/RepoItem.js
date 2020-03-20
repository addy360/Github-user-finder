import React from 'react'

const RepoItem = props=>{

	return(
		<div className="card">
			<h3>
				<a target="_blank" href={props.repo.html_url} >{props.repo.name}</a>
			</h3>
		</div>
	)
}

export default RepoItem