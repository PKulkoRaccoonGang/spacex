import React from 'react';
import { Container } from 'react-bootstrap';
import UserBar from './UserBar';
import CustomMission from './CustomMission';

import './Profile.scss';

const Profile = () => (
	<section className="profile__page">
		<Container>
			<div className="profile__page-items">
				<UserBar />
				<div className="profile__page-wrapper">
					<h2 className="profile__page-title">Create custom mission</h2>
					<CustomMission />
				</div>
			</div>
		</Container>
	</section>
);

export default Profile;
