import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import TravelList from '../travel/TravelList';
import RequestList from '../request/RequestList';

const useStyles = makeStyles(theme => ({
	grid: {
		width: "100%"
	}
}))

const HomeView = (props) => {
	const classes = useStyles();
	return (
		<Grid container justify="center" spacing={2} className={classes.grid}>
			<Grid item>
				<TravelList />
			</Grid>
			<Grid item>
				<RequestList />
			</Grid>
		</Grid>
	);
};

export default HomeView;