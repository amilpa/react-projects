import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGreaterThan , faLessThan ,faCheckSquare } from '@fortawesome/free-solid-svg-icons'

import { useAutoAnimate } from '@formkit/auto-animate/react'

const ShoppingList = ({ List , setList}) => {

	const [parent] = useAutoAnimate()

	const increment = (list) => {
		setList(List.map((values)=>{
			if (values.id === list.id) {
				return { ...values , quantity: (values.quantity+1 )}
			}
			else
			{
				return values
			}
		}))
	}

	const decrement = (list) => {
		setList(List.map((values)=>{
			if (values.id === list.id) {
				return { ...values , quantity: (values.quantity-1 )}
			}
			else
			{
				return values
			}
		}))
	}

	const checked = (list) => {
		setList(List.map((values)=>{
			if (values.id === list.id) {
				return { ...values , bought : !list.bought }
			}
			else
			{
				return values
			}
		}))
	}

	return (
		<div className='list'>
			<div className='title'>
				<div>
					Item:-
				</div>
				<div className='quantity'>
					Quantity
				</div>
			</div>
			<div ref={ parent } className='listparent'>
			{List.map((value)=>{
				return  <div key = { value.id } className={ value.bought ? 'item complete' : 'item'}>
							<div>{ value.item }</div>
							<div className='buttons'>
								<button onClick={()=> checked(value)} className={ value.bought ? 'checked complete' : 'checked'}><FontAwesomeIcon icon={ faCheckSquare }/></button>
								<button onClick={() => decrement(value)}><FontAwesomeIcon icon={ faLessThan }/></button>
								<span>{ value.quantity }</span>	
								<button onClick={() => increment(value) }><FontAwesomeIcon icon={ faGreaterThan }/></button>
							</div>
						</div>
			})}
			</div>
		</div>
	)
}

export default ShoppingList
