import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	input: {
		marginBottom: theme.spacing(2),
	},
	textField: {
		width: "100%"
	}
}));

const FormInput = (props) => {
	const classes = useStyles();
	const { inputHandler } = props;
	const { value, error } = inputHandler.content[props.id];
	return (
		<div className={classes.input}>
			<TextField
				error={error ? true : false}
				helperText={error ? error : ""}
				id={props.id}
				label={props.label}
				variant="outlined"
				onChange={(evt, val) => inputHandler.bind.onChange(evt, evt.target.value)}
				value={value}
				inputProps={{maxLength: "64"}}
				type={props.type}
				className={classes.textField}
			/>
		</div>
	)
}

export default FormInput;