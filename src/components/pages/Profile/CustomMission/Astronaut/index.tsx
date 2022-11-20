import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import UploadAndDisplayImage from './UploadAndDisplayImage';

import './Astronaut.scss';

export interface IAstronaut {
	stateLinksArray: [
		astronaut: {
			name: string;
			position: string;
			photo: string;
		},
	];
	astronautPositions: [];
	selectedArray: [];
	handleInputChange: Function;
	handleAddClick: Function;
	handleRemoveClick: Function;
}

const Astronaut = ({
	stateLinksArray,
	astronautPositions,
	selectedArray,
	handleInputChange,
	handleAddClick,
	handleRemoveClick,
}: IAstronaut) => (
	<ul>
		{stateLinksArray.map((astronaut, index) => (
			<li className="custom__mission-data" key={index}>
				<div className="mx-auto">
					<UploadAndDisplayImage
						handleInputChange={handleInputChange}
						index={index}
						stateLinksArray={stateLinksArray}
					/>
				</div>
				<div className="w-50">
					<Form.Control
						type="text"
						name="name"
						value={astronaut.name}
						onChange={(e) => handleInputChange(e, index, stateLinksArray)}
						placeholder="Astronaut name"
					/>
					<Form.Select
						name="position"
						value={astronaut.position}
						onChange={(e) => handleInputChange(e, index, stateLinksArray)}
					>
						<option value="">Select position</option>
						{astronautPositions?.map((position, index) => (
							<option
								key={index}
								disabled={selectedArray.includes(position)}
								value={position}
							>
								{position}
							</option>
						))}
					</Form.Select>
					<div className="text-center">
						<Button
							className="w-100"
							onClick={() => handleAddClick(stateLinksArray)}
							variant="primary"
						>
							Added astronaut
						</Button>
						{stateLinksArray.length !== 1 && (
							<Button
								className="w-100 mt-2"
								variant="danger"
								onClick={() =>
									handleRemoveClick(index, stateLinksArray, selectedArray)
								}
							>
								Remove
							</Button>
						)}
					</div>
				</div>
			</li>
		))}
	</ul>
);

Astronaut.propTypes = {
	stateLinksArray: PropTypes.array.isRequired,
	astronautPositions: PropTypes.arrayOf(PropTypes.string).isRequired,
	selectedArray: PropTypes.array.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	handleAddClick: PropTypes.func.isRequired,
	handleRemoveClick: PropTypes.func.isRequired,
};

export default Astronaut;
