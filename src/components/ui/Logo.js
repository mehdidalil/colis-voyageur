import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	logo: {
		marginTop: "8px",
		marginRight: "20px",
		marginLeft: "10px",
	}
}))
const Logo = (props) => {
	const classes = useStyles();

	let width = 50;
	if (props.large)
		width=200;
	else if (props.medium)
		width=125;
	else if (props.small)
		width=75;
	return (
		<div className={classes.logo}>
			<img src={`${process.env.PUBLIC_URL}/resources/img/logo.png`} alt="logo" width={`${width}px`} />
		</div>
	)
};

export default Logo;