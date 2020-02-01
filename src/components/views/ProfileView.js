import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProfileCard } from '../profile';

const ProfileView = (props) => {
	const id = parseInt(useParams().id);
	const user = props.users.find(u => u.id === id);
	const travels = props.travels.filter(t => t.userId === id);
	const requests = props.requests.filter(r => r.userId === id);
	return (
		<ProfileCard user={user} travels={travels} requests={requests} />
	);
}

const mapStateToProps = (state) => ({
	users: state.users,
	travels: state.travels,
	requests: state.requests
});

export default connect(mapStateToProps)(ProfileView);