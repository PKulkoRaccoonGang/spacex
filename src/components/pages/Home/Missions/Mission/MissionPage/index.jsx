import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Carousel, Container, Spinner, Alert } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ReactPlayer from 'react-player/youtube';
import { getMission } from '../../../../../../store/slices/missionsSlice';

import './MissionPage.scss';

const MissionPage = ({ missionId }) => {
	const dispatch = useDispatch();
	const { mission, status, error } = useSelector((state) => state.missions);

	useEffect(() => dispatch(getMission(missionId)), []);

	const errorMessage = error && (
		<Alert variant="danger">An error occurred: {error}</Alert>
	);

	const spinner = status === 'loading' && (
		<Spinner
			className="d-block"
			animation="border"
			role="status"
			style={{ margin: '0 auto' }}
		/>
	);

	return (
		<div className="mission__page">
			<Container>
				{errorMessage}
				{spinner}
				{!(status === 'loading' || error) && (
					<div className="mission__page-items">
						<div>
							{mission?.images?.length > 0 ? null : (
								<Alert variant="info">
									No one managed to photograph this mission, look further, maybe
									you are lucky...
								</Alert>
							)}
							<Carousel className="carusel animate__animated animate__pulse">
								{mission?.images?.map((imageSrc, index) => (
									<Carousel.Item key={index} className="h-100">
										<img
											className="d-block w-100 h-200"
											src={imageSrc}
											alt={mission?.rocket?.name}
										/>
									</Carousel.Item>
								))}
							</Carousel>
						</div>
						<div className="d-flex">
							<div>
								<h2 className="mission__title animate__animated animate__fadeInUp">
									{mission?.name || 'Not specified'}
								</h2>
								<div className="mission__text animate__animated animate__fadeInUp">
									{mission?.details || (
										<Alert variant="info">
											Unfortunately, this mission has no description...
										</Alert>
									)}
								</div>
							</div>

							<div className="ml-2">
								<ReactPlayer
									className="animate__animated animate__fadeInUp mb-3"
									url={mission?.video}
									controls={true}
									light={true}
								/>

								<Table
									className="table animate__animated animate__fadeInUp"
									striped
									bordered
									hover
								>
									<thead>
										<tr>
											<th>Rocket parameters</th>
											<th>Value</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Rocket name</td>
											<td>{mission?.rocket?.name || 'Not specified'}</td>
										</tr>
										<tr>
											<td>Rocket type</td>
											<td>{mission?.rocket?.type || 'Not specified'}</td>
										</tr>
										<tr>
											<td>Launch year</td>
											<td>{mission?.year || 'Not specified'}</td>
										</tr>
										<tr>
											<td>Payload</td>
											<td>{mission?.payload?.id || 'Not specified'}</td>
										</tr>
										<tr>
											<td>Nationality</td>
											<td>
												{mission?.payload?.nationality || 'Not specified'}
											</td>
										</tr>
										<tr>
											<td>Payload type</td>
											<td>{mission?.payload?.type || 'Not specified'}</td>
										</tr>
										<tr>
											<td>Orbit</td>
											<td>{mission?.orbit || 'Not specified'}</td>
										</tr>
										<tr>
											<td>Site</td>
											<td>{mission?.site || 'Not specified'}</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
					</div>
				)}
			</Container>
		</div>
	);
};

MissionPage.propTypes = {
	missionId: PropTypes.number,
};

export default MissionPage;
