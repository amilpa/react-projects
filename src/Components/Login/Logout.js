
import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'


const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientid = process.env.REACT_APP_AUTH0_CLIENT_ID


const Logout = () => {
	const { isLoading } = useAuth0();

	const { logout } = useAuth0();

	return (
		<button onClick={() => logout()} className='Logout'>Logout</button>
	)
}

export default Logout
