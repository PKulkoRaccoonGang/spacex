import { useState, useCallback } from 'react';

export const useHttpRequest = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(null);

	const makeRequest = useCallback(
		async (
			url,
			method = 'GET',
			body = null,
			headers = { 'Content-Type': 'application/json' },
		) => {
			setIsLoading(true);

			try {
				const response = await fetch(url, { method, body, headers });

				if (!response.ok) {
					throw new Error(
						`Could not fetch: ${url}, status: ${response.status}`,
					);
				}

				const data = await response.json();

				setIsLoading(false);

				return data;
			} catch (e) {
				setIsLoading(false);
				setIsError(e.message);

				throw e;
			}
		},
		[],
	);

	const clearError = useCallback(() => setIsError(null), []);

	return { isLoading, makeRequest, isError, clearError };
};
