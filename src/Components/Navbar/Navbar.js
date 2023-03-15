
import React from 'react'

import { useState } from 'react'

import './Navbar.css'

const Navbar = () => {

	const navBarItems = [
		{
			"Name" : "Home",
			"link" : "#"
		},
		{
			"Name" : "Cart",
			"link" : "#",
		},
		{
			"Name" : "Buy",
			"link" : "#",
		},
		{
			"Name" : "Flash mob",
			"link" : "#"
		},
		{
			"Name" : "Get a life",
			"link" : "#",
		}
	]

	const [ navButtonClicked , setNavButtonClicked] = useState(false);


	return (
		<div className='parent-nav'>
			<div className='main-content'>
				<h2 className='navbar-heading'>Navbar</h2>
				<button className={ navButtonClicked ? ( 'hamburger is-active' ) : ('hamburger')} onClick= {() => setNavButtonClicked(!navButtonClicked) }>
					<div className='bar'></div>
				</button>
				<ul className='ul'>
						{ navBarItems.map((value) => {
							return <li><a href={ value.link }>{ value.Name }</a></li>
						})}	
						<button>Sign up</button>
				</ul>
			</div>
			<div className={ navButtonClicked ? ( 'mobile-nav-content is-active' ) : ('mobile-nav-content')}>
				{ navBarItems.map((value) => {
					return <li><a href={ value.link }>{ value.Name }</a></li>
				})}
				<button>Sign up</button>
			</div>
		</div>
	)
}

export default Navbar
