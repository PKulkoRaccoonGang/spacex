import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Spinner, Alert, Button } from 'react-bootstrap';
import Mission from './Mission';
import { getAllMissions } from '../../../../store/slices/missionsSlice';

import './Missions.scss';
import { useDispatch, useSelector } from 'react-redux';

const Missions = ({ onMissionSelected }) => {
	const [missionsList, setMissionsList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(24);
	const [missionsEnded, setMissionsEnded] = useState(false);

	const dispatch = useDispatch();
	const { missions, status, error } = useSelector((state) => state.missions);
	console.log('missions', missions);
	useEffect(() => onRequest(offset, true), []);

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);

		dispatch(getAllMissions(offset)).then(onMissionsListLoaded);
	};

	const onMissionsListLoaded = (newMissionsList) => {
		const MISSIONS_FETCH_LIMIT = 9;
		let ended = false;

		if (newMissionsList.payload.length < MISSIONS_FETCH_LIMIT) {
			ended = true;
		}

		setMissionsList((missionsList) => [
			...missionsList,
			...newMissionsList.payload,
		]);

		setNewItemLoading(false);
		setOffset((offset) => offset + MISSIONS_FETCH_LIMIT);
		setMissionsEnded(ended);
	};

	const errorMessage = error && (
		<Alert variant="danger">An error occurred: {error}</Alert>
	);

	const spinner = status === 'loading' && !newItemLoading && (
		<Spinner
			className="d-block"
			animation="border"
			role="status"
			style={{ margin: '0 auto' }}
		/>
	);

	return (
		<div className="missions">
			<Container>
				<div className="missions__wrapper animate__animated animate__fadeInUp">
					<h2 className="missions__title">Completed missions</h2>
					{errorMessage}
					{spinner}
					<div className="missions__items">
						{missionsList.map((mission, index) => (
							<Mission
								id={mission.flight_number}
								key={
									mission.flight_number === 110 || 109
										? index
										: mission.flight_number
								}
								onClick={() => onMissionSelected(mission.flight_number)}
								name={mission.mission_name}
								details={mission.details}
							/>
						))}
					</div>
				</div>
				<Button
					className="mt-4 hvr-wobble-horizontal"
					onClick={() => onRequest(offset)}
					variant="primary"
					disabled={newItemLoading}
					style={{ display: missionsEnded ? true : false }}
				>
					More missions...
				</Button>
			</Container>
		</div>
	);
};

Missions.propTypes = {
	onMissionSelected: PropTypes.func.isRequired,
};

export default Missions;
