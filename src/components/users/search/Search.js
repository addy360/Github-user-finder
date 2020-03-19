import React, {Component, Fragment} from 'react'

class Search extends Component{
	state = {
		text:''
	}
	onChange = e=>{
		this.setState({text:e.target.value})
	}
	onSubmit = e =>{
		e.preventDefault()
		if (this.state.text === '') {
			this.props.setAlert('Please, enter a name you want to search', 'danger')
		}else{
			this.props.searchUser(this.state.text)
			this.setState({text:''})
		}
	}
	render(){
		return(
			<Fragment>
				<form onSubmit={this.onSubmit} className="form">
					<input type="text" placeholder="Search users ..." value={this.state.text} onChange={this.onChange} />
					<input type="submit" value="Search" className="btn btn-block btn-primary " />
				</form>
				{ this.props.showClear && <button onClick={this.props.clearUsers} className="btn btn-light btn-block" >Clear Users</button>}
			</Fragment>
		)
	}
}

export default Search