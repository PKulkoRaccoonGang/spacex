import React from 'react';
import { Link } from 'react-router-dom';

import LogoImage from '../../../images/logo.png';
import './Logo.scss';

const Logo = () => (
	<div className="logo">
		<Link to="/">
			<img src={LogoImage} title="Logo" alt="Logo" />
		</Link>
	</div>
);

export default Logo;
