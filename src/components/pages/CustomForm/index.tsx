import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, InputGroup } from 'react-bootstrap';

import './CustomForm.scss';

export interface ICustomForm {
	handleClick: Function;
	title: string;
	isError: boolean;
}

const CustomForm = ({ handleClick, title, isError }: ICustomForm) => {
	const [email, setEmail] = useState<string>();
	const [pass, setPass] = useState<string>();
	const [userName, setUserName] = useState<string>();

	return (
		<div className="custom-form">
			<InputGroup className="mb-3 flex-column">
				<div className="mb-2">
					<Form.Control
						type="name"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setUserName(e.target.value)
						}
						value={userName}
						placeholder="User name"
						aria-label="user name"
					/>
				</div>
				<div className="mb-2">
					<Form.Control
						type="email"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setEmail(e.target.value)
						}
						value={email}
						placeholder="Email"
						aria-label="email"
					/>
				</div>
				<div>
					<Form.Control
						type="password"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setPass(e.target.value)
						}
						value={pass}
						placeholder="Password"
						aria-label="password"
					/>
				</div>
			</InputGroup>
			{isError && (
				<div className="text-danger mb-3 d-flex">
					<strong>Error! Wrong login or password.</strong>
					<p>Please check the completed data.</p>
				</div>
			)}
			<Button
				className="mb-3 w-100"
				variant="primary"
				onClick={() => handleClick(email, pass)}
			>
				{title}
			</Button>
		</div>
	);
};

CustomForm.propTypes = {
	handleClick: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	isError: PropTypes.bool.isRequired,
};

export default CustomForm;
