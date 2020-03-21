import React, { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

const Alert = (props)=>{
	const {alert } = useContext(AlertContext)
	return(
		 alert && <div className ={`alert alert-${alert.type}`} > 
			<i className="fas fa-info-circle" ></i> {alert.msg}
		 </div>
	)
}

export default Alert