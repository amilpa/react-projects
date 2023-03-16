import React from 'react'

import './Style.css'

const ContactCard = ({ Name , Email , Age , Phone_number , img }) => {
	return (
		<div className='card'>
			<img src={ img } alt="" /> 
			<div className='content-contact'>
				<h2>{ Name }</h2>
				<p>{ Email }</p>
				<p>Age : { Age }</p>
				<p>{ Phone_number }</p>
			</div>
		</div>
	)
}

export default ContactCard
