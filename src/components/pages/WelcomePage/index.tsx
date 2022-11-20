import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

import './Welcome.scss';

const Welcome = () => (
	<Container>
		<div className="welcome-page animate__animated animate__flipInX">
			<img
				className="welcome-page__gif"
				src="https://static.collectui.com/shots/2753850/building-rocket-large"
				alt="welcome poster"
			/>
			<h1 className="mb-4">
				Congratulations! <br /> You have successfully registered!
			</h1>
			<Link to="/">
				<Button className="button-primary">Back to home page</Button>
			</Link>
		</div>
	</Container>
);

export default Welcome;
