import React from 'react';
import { CustomCard } from '../custom/CustomCard';

const RequestCard = (props) => {
	return (
		<CustomCard title="Demande" color="secondary" data={props.data} />
	);
};

export default RequestCard;