
import React, { useState } from 'react'

import CalculatorButtons from './CalculatorButtons'

import CalculatorForm from './CalculatorForm'

import './Style.css'

const CalculatorMain = () => {

	const [input, setInput] = useState("")

	return (
		<div className='main-parent'>
			<CalculatorForm input={ input } setInput = { setInput }/>
			<CalculatorButtons input = { input } setInput = { setInput } />
		</div>
	)
}

export default CalculatorMain
