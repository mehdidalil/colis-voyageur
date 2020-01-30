import React from 'react';
import { Container, Grid, makeStyles, Typography, List, ListItem, Divider, useTheme } from '@material-ui/core';
import { Logo } from '../ui';

const useStyles = makeStyles(theme => ({
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: "10em",
	},
	container: {
		marginTop: "2em"
	},
	text: {
		color: theme.palette.grey[500],
		textAlign: "center"
	},
	list: {
		maxWidth: 400
	}
}))
const Footer = (props) => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Container className={classes.container} alignItems="center">
				<Logo small />
				<List >
					<ListItem className={classes.text}>© Copyright 2019 ColisVoyageur (All rights reserved)</ListItem>
				</List>
			</Container>
		</footer>
	);
};

export default Footer;