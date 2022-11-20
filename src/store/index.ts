import { configureStore } from '@reduxjs/toolkit';
import useReducer from './slices/userSlice';
import userBarSlice from './slices/userBarSlice';
import missionsSlice from './slices/missionsSlice';
import searchSlice from './slices/searchSlice';
import customMission from './slices/customMissionSlice';

export const store = configureStore({
	reducer: {
		user: useReducer,
		userBar: userBarSlice,
		missions: missionsSlice,
		search: searchSlice,
		customMission: customMission,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
