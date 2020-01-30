import React from 'react';
import ListView from './ListView';
import { connect } from 'react-redux';
import { TravelCard } from '../travel';

const TravelListView = (props) => {
	return (
		<ListView data={props.travels} component={TravelCard}/>
	);
};

const mapStateToProps = (state) => ({
	travels: state.travels,
});

export default connect(mapStateToProps)(TravelListView);