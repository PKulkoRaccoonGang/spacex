import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Container } from 'react-bootstrap';

import NotFoundGif from '../../../images/not-found.gif';
import './NotFound.scss';

const NotFound = () => (
	<>
		<Container>
			<Alert
				className="not-found-message animate__animated animate__jackInTheBox"
				variant="danger"
			>
				<img
					className="not-found-message__gif"
					src={NotFoundGif}
					alt="Not found logo"
				/>
				<Alert.Heading>Error 404: Page not found</Alert.Heading>
				<p className="not-found-message__text">
					Sorry, the page was not found, you can return to the main page
				</p>
				<Link to="/">
					<Button variant="primary">Back to the Home page</Button>
				</Link>
			</Alert>
		</Container>
	</>
);

export default NotFound;
