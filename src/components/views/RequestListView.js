import React from 'react';
import ListView from './ListView';
import { connect } from 'react-redux';
import { RequestCard } from '../request';

const RequestListView = (props) => {
	return (
		<ListView data={props.requests} component={RequestCard}/>
	);
};

const mapStateToProps = (state) => ({
	requests: state.requests,
});

export default connect(mapStateToProps)(RequestListView);