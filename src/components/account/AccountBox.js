import React from 'react';
import { Paper, makeStyles, TextField, Box, Typography, Avatar, Container, Button } from '@material-ui/core';
import { useInputState } from '../hooks';
import AccountForm from './AccountForm';
import initInputs from './utils/initInputs';

const useStyles = makeStyles(theme => ({
	paper: {
		maxWidth: 600,
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	container: {
		width: "90%",
	},
	title: {
		paddingTop: "30px",
		paddingBottom: "20px",
	},
	small: {
		width: theme.spacing(6),
		height: theme.spacing(6),
		marginBottom: "20px"
	},
	actions: {
		display: "flex",
		justifyContent: "center",
		paddingTop: "10px",
		paddingBottom: "30px",
	},
	button: {
		marginLeft: "10px",
		marginRight: "10px",
	}
}));

const AccountBox = (props) => {
	const classes = useStyles();
	const inputHandler = useInputState(initInputs(props.inputs));
	return (
		<Paper elevation={3} className={classes.paper}>
			<Typography component="h4" variant="h4" className={classes.title}>
				{props.title}
			</Typography>
			<Avatar className={classes.small}>
				{props.icon}
			</Avatar>
			<Container className={classes.container}>
				<div>
					<AccountForm
						inputs={props.inputs}
						inputHandler={inputHandler}
					/>
				</div>
			</Container>
			<Container className={classes.actions}>
				{props.buttons.map((button, k) => (
					<Button
						key={k}
						onClick={() => button.click(inputHandler)}
						variant="contained"
						className={classes.button}
					>
						{button.label}
					</Button>
				))}
			</Container>
		</Paper>
	);
}

export default AccountBox;