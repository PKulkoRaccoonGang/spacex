import React from 'react';
import Main from './Main';
import Missions from './Missions';

export type HomePageTypes = {
	onMissionSelected: (id: React.SetStateAction<null>) => void;
};

const HomePage = ({ onMissionSelected }: HomePageTypes) => (
	<>
		<Main />
		<Missions onMissionSelected={onMissionSelected} />
	</>
);

export default HomePage;
