import React, { useReducer, Fragment } from 'react'
import alertReducer from './alertReducer'
import AlertContext from './AlertContext'
import {
	SET_ALERT,
	REMOVE_ALERT,
} from '../types'

const AlertState = props=>{
	const initialState = null
	const [state, dispatch] = useReducer(alertReducer, initialState)

	const setAlert= (msg, type)=>{
	    dispatch({type:SET_ALERT, payload:{msg,type}})
	    setTimeout(()=>dispatch({type:REMOVE_ALERT}),3000)
	  }

	return (
		<Fragment>
			<AlertContext.Provider value={{
						alert:state,
						setAlert
					}}>
				{props.children}
			</AlertContext.Provider>
		</Fragment>
	)
}

export default AlertState