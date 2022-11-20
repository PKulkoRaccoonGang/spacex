import React from 'react';
import { useState } from 'react';
import CustomForm from './pages/CustomForm';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../store/slices/userSlice';

const SingIn = () => {
	const [isError, setIsError] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (email: string, password: string) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						// @ts-ignore
						token: user.accessToken,
					}),
				);
				navigate('/profile');
			})
			.catch(() => setIsError(true));
	};

	return (
		<>
			<Container>
				<CustomForm
					title="Sign in"
					handleClick={handleLogin}
					isError={isError}
				/>
			</Container>
		</>
	);
};

export default SingIn;
