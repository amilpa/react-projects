import React from 'react'

import Result from './Logic'

const CalculatorButtons = ({ input , setInput }) => {


	const numberButtons = [ "CLR" , "DEL" , "HELP" , "/" ,  7,8,9 ,"*" , 4,5,6 , "-" , 1,2,3, "+" , 0 , "." , "="]

	const handleClick = (value) => {
		var newInput ="";
		if (value==="CLR") {
			setInput("")
		}
		else if (value==="=") {
			try{
				setInput(Result(input).toString())
			}
			catch(err){
				alert("Shitty expression")
			}
		}

		else if (value==="HELP"){
			setInput("No")
		}

		else if(value==="DEL"){
			newInput = input.substring(0,input.length-1);
			setInput(newInput)
		}
		else
		{
			newInput = input.concat(value)
			setInput(newInput)
		}
	}

	return (
		<div className='buttons'>
			{numberButtons.map((value) => {
				return <button key={ value } onClick={() => handleClick(value) }>{ value }</button>
			})}
		</div>
	)
}

export default CalculatorButtons
