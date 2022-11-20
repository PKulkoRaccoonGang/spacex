import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import MissionPage from './components/pages/Home/Missions/Mission/MissionPage';
import NotFound from './components/pages/NotFound';
import Registration from './components/pages/Registration';
import Layout from './components/Layout';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Welcome from './components/pages/WelcomePage';
import RequireAuthenticated from './components/hoc/RequireAuthenticated';

import 'animate.css';
import 'hover.css';
import Search from './components/pages/Search';

const App = () => {
	const [selectedMission, setSelectedMission] = useState(null);

	const onMissionSelected = (id: React.SetStateAction<null>) =>
		setSelectedMission(id);

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						index
						element={<Home onMissionSelected={onMissionSelected} />}
					/>
					<Route
						path="search"
						element={<Search onMissionSelected={onMissionSelected} />}
					/>
					<Route
						path={`mission/id=${selectedMission}`}
						element={<MissionPage missionId={selectedMission} />}
					/>
					<Route path="registration" element={<Registration />} />
					<Route path="login" element={<Login />} />
					<Route
						path="profile"
						element={
							// <RequireAuthenticated>
							<Profile />
							// </RequireAuthenticated>
						}
					/>
					<Route
						path="welcome"
						element={
							<RequireAuthenticated>
								<Welcome />
							</RequireAuthenticated>
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
