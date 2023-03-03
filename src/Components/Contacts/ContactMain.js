import React , { useEffect, useState } from 'react'

import ContactCard from './ContactCard'


const ContactMain = () => {

	const [results, setResults] = useState([])

	useEffect(() => {
		fetch("https://randomuser.me/api/?results=3")
			.then(response => response.json())
			.then(data => {
				setResults(data.results)
			})
	},[])

	return (
		<div className='parent'>
			{ results.map((value , index) => {
				return <ContactCard  Name = { value.name.first } Email = { value.email } Age = { value.registered.age } Phone_number = { value.phone } img = { value.picture.medium } key = { index }/>
			})}
		</div>
	)
}

export default ContactMain
