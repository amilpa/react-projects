import React from 'react'
import { Link } from 'react-router-dom'

import './Style.css'

const CompList = () => {
	return (
		<div className='parent-div'>
			<div className='list-comp'>
				<Link to={"/counter"}>Counter<p>Simple counter made using a state hook.</p></Link>
				<Link to={"/temperature"}>Temperature changer<p>A component where color changes according to temperature.</p></Link>
				<Link to={"/search"}>Search Filter<p>Filters a list of names according to the input given in realtime.</p></Link>
				<Link to={"/registration"}>Registration form<p>A registration form with state based styling.</p></Link>
				<Link to={"/quiz"}>Quiz app<p>A quiz app with a fixed set of questions and a score board.</p></Link>
				<Link to={"/navbar"}>Navbar<p>A simple responsive navbar.</p></Link>
				<Link to={"/todo"}>Todo app<p>A Todo app in which you can add,delete,update tasks and mark them as complete.</p></Link>
				<Link to={"/calculator"}>Calculator<p>Calculator that can do all basic functions.</p></Link>
				<Link to={"/contact"}>Contact Cards<p>Contact cards made using data from an external api</p></Link>
				<Link to={"/weather"}>Weather app<p>Weather app that shows temperature,weather and <br/>location with dynamic background</p></Link>
				<Link to={"/shoppinglist"}>Shopping List app<p>Similiar to todoapp but a <br/> quantity variable is associated with each item</p></Link>
			</div>
		</div>
	)
}

export default CompList
