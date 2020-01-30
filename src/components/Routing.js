import React from 'react';
import { BrowserRouter, Route, HashRouter} from 'react-router-dom';
import { Login, Create } from './account';
import { Container, makeStyles } from '@material-ui/core';
import { Menu, Footer } from './menu';
import { HomeView, TravelListView, RequestListView } from './views';

const useStyles = makeStyles(theme => ({
	container: {
		paddingTop: "30px",
		display: "flex",
		justifyContent: "center"
	}
}));

const Routing = () => {
	const classes = useStyles();
	return (
		<HashRouter>
			<Menu />
			<Container className={classes.container}>
				<Route exact path="/" component={HomeView} />
				<Route path="/login" component={Login} />
				<Route path="/create" component={Create} />
				<Route path="/travels" component={TravelListView} />
				<Route path="/requests" component={RequestListView} />
			</Container>
		</HashRouter>
	)
};

export default Routing;