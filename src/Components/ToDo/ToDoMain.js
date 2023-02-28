import React, { useState } from 'react'

import Form from './Form'

import ToDoList from './ToDoList'

import './Style.css'


const ToDoMain = () => {
	const [input, setInput] = useState("")

	const [Todo, setTodo] = useState([])

	const [editTodo, setEditTodo] = useState(null)


	return (
		<div className='parent-div'>
			<header className='header'>
				Todo list
			</header>
			<main className='main'>
				<Form input={ input } setInput={ setInput } Todo= { Todo } setTodo = { setTodo } editTodo = { editTodo } setEditTodo = { setEditTodo }/>
				<ToDoList  Todo = { Todo } setTodo = { setTodo } editTodo = { editTodo } setEditTodo = { setEditTodo }/>
			</main>
		</div>
	)
}

export default ToDoMain
