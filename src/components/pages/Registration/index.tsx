import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SingUp from '../../SingUp';

import registerRocket from '../../../images/register-rocket.webp';

import './Registration.scss';

const Registration = () => (
	<Container>
		<div className="register-page animate__animated animate__pulse">
			<img className="register-page__gif" src={registerRocket} alt="Rocket" />
			<h2 className="mb-3">Register a new account:</h2>
			<SingUp />
			<Alert className="register-page__alert" variant="primary">
				Already have an account?{' '}
				<Link className="register-page__alert-link" to="/login">
					Log in
				</Link>
			</Alert>
		</div>
	</Container>
);

export default Registration;
