import { useSelector } from 'react-redux';
import { RootStateOrAny } from 'react-redux';

export interface IUseAuthenticate {
	email: string;
	token: string;
	id: string;
}

export function useAuthenticate() {
	const { email, token, id } = useSelector(
		(state: RootStateOrAny): IUseAuthenticate => state.user,
	);

	return { isAuthenticated: !!email, email, token, id };
}
