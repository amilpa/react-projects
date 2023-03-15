import React from 'react'
import { Link } from 'react-router-dom'

import './Style.css'

const CompList = () => {
	return (
		<div className='parent-div'>
			<ol>
				<li><Link to={"/counter"}>Counter</Link></li>
				<li><Link to={"/temperature"}>Temperature changer</Link></li>
				<li><Link to={"/search"}>Search Filter</Link></li>
				<li><Link to={"/registration"}>Registration form</Link></li>
				<li><Link to={"/quiz"}>Quiz app</Link></li>
				<li><Link to={"/navbar"}>Navbar</Link></li>
				<li><Link to={"/todo"}>Todo app</Link></li>
				<li><Link to={"/calculator"}>Calculator</Link></li>
				<li><Link to={"/contact"}>Contact Cards</Link></li>
				<li><Link to={"/weather"}>Weather app</Link></li>
				<li><Link to={"/shoppinglist"}>Shopping List app</Link></li>
			</ol>
		</div>
	)
}

export default CompList
