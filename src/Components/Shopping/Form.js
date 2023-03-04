
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { v4 as uuid } from 'uuid'

const Form = ({ input , setInput , List , setList }) => {

	const handleSubmit = (event) => {
		event.preventDefault()
		setList([ ...List,
			{"id" : uuid().slice(0,8) , "item" : input , "quantity" : 1 , "bought" : false
		}])	
		setInput("")
	}

	return (
		<div className='form'>
			<input type="text" value={ input } placeholder='Add item...' onChange={(event)=> setInput(event.target.value)}/>
			<button onClick={ handleSubmit }><FontAwesomeIcon icon ={ faPlus }/></button>
		</div>
	)
}

export default Form
