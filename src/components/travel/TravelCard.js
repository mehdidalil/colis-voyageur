import React from 'react';
import { CustomCard } from '../custom/CustomCard/';
import { connect } from 'react-redux';

const TravelCard = (props) => {
	const user = props.users.find(user => user.id === props.data.userId);
	return (
		<CustomCard title="Voyage" color="primary" data={props.data} user={user}/>
	);
};

const mapStateToProps = (state) => ({
	users: state.users,
});

export default connect(mapStateToProps)(TravelCard);