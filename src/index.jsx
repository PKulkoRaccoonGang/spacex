import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axe from '@axe-core/react';
import App from './App';
import { store } from './store';
import './firebase';

import './core/scss/_global.scss';

if (process.env.NODE_ENV !== 'production') {
	const DEBOUNCE = 1000;
	axe(React, ReactDOM, DEBOUNCE);
}

render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
