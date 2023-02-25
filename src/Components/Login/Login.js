
import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

import './Authentication.css';

const Login = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<button onClick={() => loginWithRedirect()} className='Login'>Login</button>
	)
}

export default Login
