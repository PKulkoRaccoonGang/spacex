import React, { useState } from 'react';
import CustomForm from './pages/CustomForm';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../store/slices/userSlice';

const SingUp = () => {
	const [isError, setIsError] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRegister = (email: string, password: string) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user);
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						// @ts-ignore
						token: user.accessToken,
					}),
				);
				navigate('/welcome');
			})
			.catch(() => setIsError(true));
	};

	return (
		<>
			<Container>
				<CustomForm
					title="Register an account"
					isError={isError}
					handleClick={handleRegister}
				/>
			</Container>
		</>
	);
};

export default SingUp;
