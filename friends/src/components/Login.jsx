import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

//hooks
import { useInput } from '../utils/hooks/useInput'

//redux
import { connect } from 'react-redux'
import { login } from '../store/actions'

function Login(props) {
	const [credentials, setCredentials, handleChanges] = useInput({
		username: '',
		password: ''
	})
  	const handleSubmit = e => {
    e.preventDefault();
    props.login(credentials, props.history)
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

const  mapStateToProps = props => {
	
}

const mapActionsToProps = {
	login
}

export default connect(mapStateToProps, mapActionsToProps)(Login);