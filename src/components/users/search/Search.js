import React, {useState,useContext} from 'react'
import GithubContext from '../../../context/github/githubContext'
import AlertContext from '../../../context/alert/AlertContext'

const Search = props=>{
	const { searchUser, clearUsers, users } = useContext(GithubContext)
	const { setAlert } = useContext(AlertContext)
	const [text, setText] = useState('')
	const onChange = e=>{
		setText(e.target.value)
	}
	const onSubmit = e =>{
		e.preventDefault()
		if (text === '') {
			setAlert('Please, enter a name you want to search', 'danger')
		}else{
			searchUser(text)
			setText('')
		}
	}
		return(
			<div className="card">
				<form onSubmit={onSubmit} className="form">
					<input type="text" placeholder="Search users ..." value={text} onChange={onChange} />
					<input type="submit" value="Search" className="btn btn-block btn-primary " />
				</form>
				{ users.length > 0 && <button onClick={clearUsers} className="btn btn-light btn-block" >Clear Users</button>}
			</div>
		)

}

export default Search