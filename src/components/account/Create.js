import React from 'react';
import AccountBox from './AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import submitForm from './utils/submitForm';

const inputs = [
	{
		id: "firstName",
		label: "Prénom",
	},
	{
		id: "lastName",
		label: "Nom de famille",
	},
	{
		id: "mail",
		label: "Mail",
	},
	{
		id: "password",
		label: "Mot de passe",
		type: "password",
	},
	{
		id: "passwordConfirm",
		label: "Confirmer le mot de passe",
		type: "password",
	},
];

const buttons = [
	{
		label: "Inscription",
		click: (data) => submitForm(data)
	}
];

const Create = (props) => {
	return (
		<AccountBox
			title="Inscription"
			icon={<ExitToAppIcon />}
			inputs={inputs}
			buttons={buttons}
		/>
	)
};

export default Create;