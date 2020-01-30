import React from 'react';
import { CustomCard } from '../custom/CustomCard/';

const TravelCard = (props) => {
	return (
		<CustomCard title="Voyage" color="primary" data={props.data} />
	);
};

export default TravelCard;