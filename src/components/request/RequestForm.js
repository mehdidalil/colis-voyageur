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
		label: "Date maximum de départ",
		type: "date"
	},
	{
		id: "arrival",
		label: "Ville d'arrivée",
	},
	{
		id: "desc",
		label: "Description du colis",
	},
	{
		id: "type",
		label: "Type de colis",
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

const RequestForm = (props) => {
	return (
		<AccountBox
			title="Créer une demande"
			inputs={inputs}
			buttons={buttons}
		/>
	)
};

export default RequestForm;