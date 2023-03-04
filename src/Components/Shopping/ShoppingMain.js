import React,{ useState } from 'react'

import Form from './Form'
import ShoppingList from './ShoppingList'

import './Style.css'

const ShoppingMain = () => {

	const [Input, setInput] = useState("")

	const [ List , setList ] = useState([])


	return (
		<div className='main-div'>
			<div className='content'>
				<h1>Shopping list</h1>
				<Form input = { Input } setInput = { setInput } List = { List } setList = { setList }/>
				<ShoppingList List = { List } setList = { setList } />
			</div>
		</div>
	)
}

export default ShoppingMain
