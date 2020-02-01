import React from 'react';
import { CustomCard } from '../custom/CustomCard';
import { connect } from 'react-redux';

const RequestCard = (props) => {
	const user = props.users.find(user => user.id === props.data.userId);
	return (
		<CustomCard title="Demande" color="secondary" data={props.data} user={user} />
	);
};

const mapStateToProps = (state) => ({
	users: state.users,
});

export default connect(mapStateToProps)(RequestCard);