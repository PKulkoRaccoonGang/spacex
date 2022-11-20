import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SingIn from '../../SingIn';

import loginRocket from '../../../images/login-rocket.gif';
import './Login.scss';

const Login = () => (
	<Container>
		<div className="login-page animate__animated animate__pulse">
			<img className="login-page__gif" src={loginRocket} alt="Rocket" />
			<h2 className="mb-3">Login to your account:</h2>
			<SingIn />
			<Alert className="login-page__alert" variant="primary">
				or{' '}
				<Link className="login-page__alert-link" to="/registration">
					register
				</Link>{' '}
				a new account
			</Alert>
		</div>
	</Container>
);

export default Login;
