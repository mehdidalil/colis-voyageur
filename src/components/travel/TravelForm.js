import React from 'react';
import AccountBox from '../account/AccountBox';
import submitForm from '../account/utils/submitForm';

const inputs = [
	{
		id: "departure",
		label: "Ville de départ",
	},
	{
		id: "date",
		label: "Date de départ",
		type: "date"
	},
	{
		id: "arrival",
		label: "Ville d'arrivée",
	},
	{
		id: "desc",
		label: "Description",
	},
	{
		id: "type",
		label: "Type de trajet",
	},
	{
		id: "price",
		label: "Prix demandé",
	},
];

const buttons = [
	{
		label: "OK",
		click: (data) => submitForm(data),
	}
];

const TravelForm = (props) => {
	return (
		<AccountBox
			title="Créer un voyage"
			inputs={inputs}
			buttons={buttons}
		/>
	)
};

export default TravelForm;