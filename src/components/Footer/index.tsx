import React from 'react';
import { Container } from 'react-bootstrap';

import Logo from '../custom/Logo';
import './Footer.scss';

const Footer = () => (
	<footer className="footer">
		<Container>
			<Logo />
		</Container>
	</footer>
);

export default Footer;
