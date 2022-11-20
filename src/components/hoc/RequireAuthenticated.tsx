import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthenticate } from '../../hooks/useAuthenticate';

export type RequireAuthenticatedTypes = {
	children: JSX.Element;
};

const RequireAuthenticated = ({ children }: RequireAuthenticatedTypes) => {
	const location = useLocation();
	const { isAuthenticated } = useAuthenticate();

	if (!isAuthenticated) {
		return <Navigate to="login" state={{ from: location }} />;
	}

	return children;
};

export default RequireAuthenticated;
