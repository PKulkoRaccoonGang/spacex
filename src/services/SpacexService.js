import { useHttpRequest } from '../hooks/useHttpRequest';

const useSpacexService = () => {
	const { isLoading, makeRequest, isError } = useHttpRequest();

	const API_BASE_URL = 'https://api.spacexdata.com/v3/';
	const BASE_OFFSET = 24;
	const MISSIONS_FETCH_LIMIT = 9;

	const getAllMissions = async (offset = BASE_OFFSET) => {
		const response = await makeRequest(
			`${API_BASE_URL}launches/?limit=${MISSIONS_FETCH_LIMIT}&offset=${offset}&${BASE_OFFSET}`,
		);

		return response.map(_transformMission);
	};

	const getMission = async (id) => {
		const response = await makeRequest(`${API_BASE_URL}launches/${id}`);

		return _transformMission(response);
	};

	const _transformMission = (mission) => {
		const ROCKET_DATA = mission.rocket;
		const PAYLOAD_DATA = ROCKET_DATA.second_stage.payloads[0];

		return {
			id: mission.flight_number,
			name: mission.mission_name,
			details: mission.details,
			video: mission.links.video_link,
			rocket: {
				name: ROCKET_DATA.rocket_name,
				type: ROCKET_DATA.rocket_type,
				year: ROCKET_DATA.rocket_year,
			},
			images: mission.links.flickr_images,
			payload: {
				id: PAYLOAD_DATA.payload_id[0],
				nationality: PAYLOAD_DATA.nationality,
				type: PAYLOAD_DATA.payload_type,
			},
			orbit: PAYLOAD_DATA.orbit_params.reference_system,
			site: mission.launch_site.site_name,
		};
	};

	return {
		isLoading,
		isError,
		getAllMissions,
		getMission,
	};
};

export default useSpacexService;
