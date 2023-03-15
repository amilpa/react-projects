import './App.css'

import CompList from './Components/CompList/CompList';

import Counter from './Components/Counter/Counter';
import Temperature from './Components/Temperature/Temperature';
import Search from './Components/Search/Search';
import Registration from './Components/Registration/Registration';
import Quiz from './Components/Quiz/Quiz';
import Navbar from './Components/Navbar/Navbar';
import ToDoMain from './Components/ToDo/ToDoMain';
import CalculatorMain from './Components/Calculator/CalculatorMain';
import ContactMain from './Components/Contacts/ContactMain';
import Weather from './Components/Weather/Weather';
import ShoppingMain from './Components/Shopping/ShoppingMain';

import { Routes , Route } from 'react-router-dom';

function App() {

	return(
		<>
			<Routes>
				<Route path='/' element={ <CompList/> }/>
				<Route path='/counter' element={ <Counter/> }/>
				<Route path='/temperature' element={ <Temperature/> }/>
				<Route path='/search' element={ <Search/> }/>
				<Route path='/registration' element={ <Registration/> }/>
				<Route path='/quiz' element={ <Quiz/> }/>
				<Route path='/navbar' element={ <Navbar/> }/>
				<Route path='/todo' element={ <ToDoMain/> }/>
				<Route path='/calculator' element={ <CalculatorMain/> }/>
				<Route path='/contact' element={ <ContactMain/> }/>
				<Route path='/weather' element={ <Weather/> }/>
				<Route path='/shoppinglist' element={ <ShoppingMain/> }/>
			</Routes>
		</>
	)
}

export default App;
