import { createSlice } from '@reduxjs/toolkit';

import defaultAvatar from '../../images/user-default-avatar.png';

const userBarSlice = createSlice({
	name: 'UserBar',
	initialState: {
		images: [{ data_url: defaultAvatar }],
	},
	reducers: {
		onChange(state, action) {
			state.images.splice(0, 1, action.payload[0]);
		},
	},
});

export const { onChange } = userBarSlice.actions;

export default userBarSlice.reducer;
