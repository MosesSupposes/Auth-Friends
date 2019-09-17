import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

//hooks
import { useInput } from '../utils/hooks/useInput'

function Login(props) {
	const [credentials, setCredentials, handleChanges] = useInput({
		username: '',
		password: ''
	})
  	const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
		localStorage.setItem('token', res.data.payload);
        props.history.push('/friendsList');
      })
      .catch(err => console.error(err));
  };

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="username"
					value={credentials.username}
					onChange={handleChanges}
				/>
				<input
					type="password"
					name="password"
					value={credentials.password}
					onChange={handleChanges}
				/>
				<button>Log in</button>
			</form>
		</div>
	);
}

export default Login;