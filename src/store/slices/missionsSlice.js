import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'https://api.spacexdata.com/v3/';
const BASE_OFFSET = 24;
const MISSIONS_FETCH_LIMIT = 9;

const _transformMission = (mission) => {
	const ROCKET_DATA = mission.rocket;
	const PAYLOAD_DATA = ROCKET_DATA.second_stage.payloads[0];

	return {
		id: mission?.flight_number,
		name: mission?.mission_name,
		details: mission?.details,
		video: mission?.links?.video_link,
		year: mission?.launch_year,
		rocket: {
			name: ROCKET_DATA?.rocket_name,
			type: ROCKET_DATA?.rocket_type,
		},
		images: mission?.links?.flickr_images,
		payload: {
			id: PAYLOAD_DATA?.payload_id[0],
			nationality: PAYLOAD_DATA?.nationality,
			type: PAYLOAD_DATA?.payload_type,
		},
		orbit: PAYLOAD_DATA?.orbit_params?.reference_system,
		site: mission?.launch_site?.site_name,
	};
};

export const getAllMissions = createAsyncThunk(
	'missions/getAllMissions',
	async function (offset = BASE_OFFSET, { rejectWithValue }) {
		try {
			const response = await fetch(
				`${API_BASE_URL}launches/?limit=${MISSIONS_FETCH_LIMIT}&offset=${offset}&${BASE_OFFSET}`,
			);

			if (!response.ok) {
				throw new Error('Server error!');
			}

			const data = await response.json();

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

export const getMission = createAsyncThunk(
	'missions/getMission',
	async function (id, { rejectWithValue, dispatch }) {
		try {
			const response = await fetch(`${API_BASE_URL}launches/${id}`, {
				method: 'GET',
			});

			if (!response.ok) {
				throw new Error('Not missing in thi ID!');
			}

			const data = await response.json();

			return _transformMission(data);
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

const setError = (state, action) => {
	state.status = 'rejected';
	state.error = action.payload;
};

const missionsSlice = createSlice({
	name: 'missions',
	initialState: {
		missions: [],
		mission: [],
		status: null,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[getAllMissions.pending]: (state, action) => {
			state.status = 'loading';
			state.error = null;
		},
		[getAllMissions.fulfilled]: (state, action) => {
			state.status = 'resolved';
			state.missions = action.payload;
		},
		[getAllMissions.rejected]: (state, action) => setError,
		[getMission.pending]: (state, action) => {
			state.status = 'loading';
			state.error = null;
		},
		[getMission.fulfilled]: (state, action) => {
			state.status = 'resolved';
			state.mission = action.payload;
		},
		[getMission.rejected]: (state, action) => setError,
	},
});

export default missionsSlice.reducer;
