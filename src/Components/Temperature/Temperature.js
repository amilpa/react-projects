import React from 'react'

import { useState } from 'react'
import './Temperature.css'

const Temperature = () => {
	const [Temperature, setTemperature] = useState(10)
	const [Feel, setFeel] = useState("cold")

	const increaseTemperature = () => {
		const newTemperature = Temperature + 1
		setTemperature(newTemperature)
		if (newTemperature>=15) {
			setFeel("hot")
		} 
	}

	const decreaseTemperature = () => {
		const newTemperature = Temperature - 1
		setTemperature(newTemperature)
		if (newTemperature< 15) {
			setFeel("cold") 
		}
	}


	return (
		<div className="app-container">
		<div className="temperature-display-container">
		<div className={`temperature-display ${ Feel }`}>{ Temperature }*C</div>
		</div>
		<div className="button-container">
		<button onClick={increaseTemperature} className="temp-button">+</button>
		<button onClick={decreaseTemperature} className="temp-button">-</button>
		</div>
		</div>
	);
}

export default Temperature
