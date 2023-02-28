import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { faTrashCan , faEdit , faSquareCheck } from '@fortawesome/free-regular-svg-icons'

const ToDoList = ( { Todo , setTodo , editTodo , setEditTodo } ) => {


	const handleDelete  = ({ id }) => {
		setTodo(Todo.filter((todo) => todo.id !== id))
	}

	const handleEdit = ({ id }) => {
		const findTodo = Todo.find((todo) => todo.id===id)	
		setEditTodo(findTodo)
	}

	const handleComplete = ({ id }) => {
		setTodo(Todo.map((item) => {
			if (item.id === id) {
				return { ...item , completed : !item.completed }
			}
			else{
				return item
			}
		}))
	} 

	return (
		<div>
			<ul className='list'>
				{Todo.map((todo) => {
					return <li key = { todo.id } className={ todo.completed ? 'complete' : ''}>{ todo.task }
						<div className='buttons'>
							<button onClick={() => handleComplete(todo)}><FontAwesomeIcon icon={ faSquareCheck }/></button>
							<button onClick={() => handleEdit(todo) }><FontAwesomeIcon icon={ faEdit } /></button>
							<button onClick={ () => handleDelete(todo) }><FontAwesomeIcon icon={ faTrashCan }/></button>
						</div>
					</li>
				})}
			</ul>
		</div>
	)
}

export default ToDoList
