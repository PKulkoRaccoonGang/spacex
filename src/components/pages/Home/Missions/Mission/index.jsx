import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import './Mission.scss';

const Mission = ({ id, name, details, onClick }) => (
	<div className="mission hvr-float">
		<h3 className="mission__title">{name}</h3>
		<p className="mission__description">{details}</p>
		<Link to={`/mission/id=${id}`}>
			<Button onClick={onClick} variant="primary">
				View mission
			</Button>
		</Link>
	</div>
);

Mission.propTypes = {
	name: PropTypes.string.isRequired,
	details: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

export default Mission;
