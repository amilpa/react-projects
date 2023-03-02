import React from 'react'


const CalculatorForm = ({ input }) => {

	return (
		<div className='display'>
			<input type="text" value={ input } readOnly/>
		</div>
	)
}

export default CalculatorForm
