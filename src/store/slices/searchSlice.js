import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selectedMission: null,
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setUser(state, action) {
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.id = action.payload.id;
		},
		onMissionSelected(state, action) {
			console.log('state', state);
			console.log('action', action);
		},
	},
});

export const { onMissionSelected } = searchSlice.actions;

export default searchSlice.reducer;
