import React,{ useState } from 'react'

import './Style.css'

const api = {
	key:***REMOVED***,
	base:***REMOVED***
}

const Weather = () => {

	const [query , setQuery ] = useState('');
	const [ weather, setWeather ] = useState('');


	const Search = (evt) => {
		if(evt.key==="Enter")
		{
			fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
				.then(res => res.json())
				.then(result => {
				setWeather(result)
				setQuery('')
			})
		}
	}


	const dateBuild = (d) => {
		let months = ["January" , "February" , "March" , "April" ,"May" , "June" , "July" , "August" , "September" , "October" , "November" ,"December"]
		let days = ["Sunday" , "Monday" ,"Tuesday" , "Wednesday" , "Thursday" ,"Friday" , "Saturday"]

		let day = days[d.getDay()]
		let month = months[d.getMonth()]
		let date = d.getDate()
		let year = d.getFullYear()

		return `${day} ${month} ${date} ${year}`
	}

	return (
		<div className={ typeof weather.main != "undefined" ? (( weather.main.temp > 16 ) ? ('app hot') : ('app')): ('app')}>
			<main>
				<div className='search-box'>
					<input type="text" required placeholder='Search...' value = { query } onChange={(event)=> setQuery(event.target.value)} onKeyPress = { Search } />
				</div>
				<div>
					{(typeof weather.main != "undefined") ? (
					<div>
						<div className='location'>
							{ weather.name },{ weather.sys.country }
						</div>	
						<div className='date'>
							<i>{ dateBuild(new Date()) }</i>
						</div>
						<div className='temperature'>
							{ Math.round( weather.main.temp )}°C
						</div>
						<div className='weather-type'>
							{ weather.weather[0].description }
						</div>
					</div>
					) : ('')}
				</div>
			</main>
		</div>
	)
}

export default Weather
