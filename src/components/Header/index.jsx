import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthenticate } from '../../hooks/useAuthenticate';
import { removeUser } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';

import Logo from '../custom/Logo';
import './Header.scss';

const Header = () => {
	const dispatch = useDispatch();
	const { isAuthenticated } = useAuthenticate();

	return (
		<header className="header">
			<Container>
				<Navbar bg="#eff5fe">
					<Navbar.Brand>
						<Logo />
					</Navbar.Brand>
					<Nav className="me-auto">
						<NavLink to="search">Search</NavLink>
						{isAuthenticated ? (
							<>
								<NavLink to="profile">My profile</NavLink>
								<NavLink to="/search" onClick={() => dispatch(removeUser())}>
									Log out
								</NavLink>
							</>
						) : (
							<>
								<NavLink to="/login">Log in</NavLink>
								<NavLink to="/registration">Registration</NavLink>
							</>
						)}
					</Nav>
				</Navbar>
			</Container>
		</header>
	);
};

export default Header;
