import { createSlice } from '@reduxjs/toolkit';

const customMissionSlice = createSlice({
	name: 'CustomMission',
	initialState: {
		astronautsList: [{ name: '', position: '' }],
		positionsList: [],
	},
	reducers: {
		handleInputChangeMissionData(state, action) {},
		getSelectedItems(state, action) {},
		handleInputChange(state, action) {},
		handleRemoveClick(state, action) {},
		handleAddClick(state, action) {},
	},
});

export default customMissionSlice.reducer;
