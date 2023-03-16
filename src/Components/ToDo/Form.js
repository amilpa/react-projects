import React, { useEffect , useRef } from 'react'

import { v4 as uuid } from 'uuid'


const Form = ({ input , setInput , Todo , setTodo , editTodo , setEditTodo }) => {

	const updateTodo = (id , task , completed) => {
		const newTodo = Todo.map((todo) => {
			return todo.id === id ? { id , task , completed } : todo
		})
		setTodo(newTodo)
		setEditTodo("")
	}

	const inputRef = useRef(null)

	useEffect(() => {
		if (editTodo) {
			setInput(editTodo.task);
			inputRef.current.focus();
		}
		else{
			setInput("");
		}
	} , [ editTodo , setInput ])

	const handleTodoChange = (event) => {
		setInput(event.target.value)
	}

	const handleTodoSubmit = (event) => {
		event.preventDefault()
		if (!editTodo) {
			setTodo([
				...Todo , { id : uuid().slice(0,8) , task : input , completed : false }
			])
			setInput("")
		}
		else
		{
			updateTodo(editTodo.id , input , editTodo.completed)
		}
	}

	return (
		<form onSubmit = { handleTodoSubmit } className='form-todo'>
			<input type="text" placeholder='Enter entry' onChange={ handleTodoChange } value= { input } required ref={inputRef}/>
			<button type='submit'>{ editTodo ? "Ok" : "Add"}</button>
		</form>
	)
}

export default Form
