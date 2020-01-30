import React from 'react';
import AccountBox from './AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import submitForm from './utils/submitForm';

const inputs = [
	{
		id: "mail",
		label: "Mail",
	},
	{
		id: "password",
		label: "Password",
		type: "password",
	},
];

const buttons = [
	{
		label: "Connexion",
		click: (data) => submitForm(data)
	}
];

const Login = (props) => {
	return (
		<AccountBox
			title="Connexion"
			icon={<ExitToAppIcon />}
			inputs={inputs}
			buttons={buttons}
		/>
	)
};

export default Login;