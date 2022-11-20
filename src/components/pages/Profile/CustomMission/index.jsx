import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFReport from './PDFReport';
import Astronaut from './Astronaut';

import './CustomMission.scss';

const astronautPositions = [
	'Commander',
	'Pilot',
	'Second pilot',
	'Flight engineer',
	'Research engineer',
	'Scientist',
];

const CustomMission = () => {
	const [astronautsList, setAstronautsList] = useState([
		{
			name: '',
			position: '',
		},
	]);
	const [positionsList, setPositionsList] = useState([]);

	const getSelectedItems = (items) =>
		Object.keys(items).map((index) => items[index]) || [];

	const selectedPositions = getSelectedItems(positionsList);

	const handleInputChange = (e, index, items) => {
		const { name, value } = e.target;
		const newArray = [...items];

		newArray[index][name] = value;

		setAstronautsList(newArray);
		setPositionsList([...positionsList, newArray[index].position]);
	};

	const handleRemoveClick = (index, items, selectedItems) => {
		const newArray = [...items];
		const newSelectedArray = [...selectedItems];

		newArray.splice(index, 1);
		newSelectedArray.splice(index, 1);

		setAstronautsList(newArray);
		setPositionsList(newSelectedArray);
	};

	const handleAddClick = (items) => {
		setAstronautsList([...items, { name: '', path: '' }]);
	};

	return (
		<div className="custom__mission">
			<Astronaut
				stateLinksArray={astronautsList}
				setStateLinksArray={setAstronautsList}
				astronautPositions={astronautPositions}
				selectedArray={selectedPositions}
				handleInputChange={handleInputChange}
				handleAddClick={handleAddClick}
				handleRemoveClick={handleRemoveClick}
			/>
			<PDFDownloadLink document={<PDFReport astronautsList={astronautsList} />}>
				<Button variant="primary">Download PDF</Button>
			</PDFDownloadLink>
		</div>
	);
};

export default CustomMission;
