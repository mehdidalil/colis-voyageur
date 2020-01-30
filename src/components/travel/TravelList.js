import React from 'react';
import { CustomList } from '../custom';

const createRow = (departure, date, arrival) => ([departure, date, arrival]);

const headers = [
	"Ville de départ",
	"Date de départ",
	"Ville d'arrivée"
];

const rows = [
	createRow("Paris", "14/09/2020", "Los Angeles",),
	createRow("New York", "05/11/2020", "Tizi Ouzou"),
	createRow("Alger", "31/02/2021", "Paris"),
];

const TravelList = (props) => {
	return (
		<CustomList headers={headers} rows={rows} title="Voyages" />
	);
};

export default TravelList;