
import React from 'react'

import { useState } from 'react'
import './Registration.css'

const Registration = () => {
	const [values , setValues] = useState({
		firstName : "" ,
		lastName : "" ,
		email : "" ,
	})

	const [submitted , setSubmitted] = useState(false)

	const [valid , setValid] = useState(false);

	const handleFirstNameInputChange = (event) => {
		setValues({
			...values , 
			firstName : event.target.value
		})
	}

	const handleLastNameInputChange = (event) => {
		setValues({
			...values , 
			lastName : event.target.value
		})
	}

	const handleEmailInputChange = (event) => {
		setValues({
			...values , 
			email : event.target.value
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (values.firstName && values.lastName && values.email) {
			setValid(true)	
		}
		setSubmitted(true)
	}

	return(
		<div className='form-container'>
			<form className='register-form' onSubmit = { handleSubmit }>
				{submitted && valid ? <div className='success-message'>Success! Thank you for registering.</div> : null}
				<input name="firstName" placeholder='First Name' className='form-field' value={values.firstName} onChange = { handleFirstNameInputChange}/>
				{submitted && !values.firstName ?<span>Please enter a first name</span> : null}
				<input name="lastName" placeholder='Last Name' className='form-field' value={values.lastName} onChange = { handleLastNameInputChange }/>
				{submitted && !values.lastName ? <span>Please enter a last name</span> : null }
				<input name="email" placeholder='Email' className='form-field' value={values.email} onChange = { handleEmailInputChange }/>
				{submitted && !values.email ? <span>Please enter an email address</span> : null }
				<button type='submit'>Register</button>
			</form>
		</div>
	)

}

export default Registration
