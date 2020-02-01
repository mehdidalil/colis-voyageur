import React from 'react';
import { Route, HashRouter} from 'react-router-dom';
import { Login, Create } from './account';
import { Container, makeStyles } from '@material-ui/core';
import { Menu } from './menu';
import { HomeView, TravelListView, RequestListView } from './views';
import ProfileView from './views/ProfileView';
import { TravelForm } from './travel';
import { RequestForm } from './request';

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
				<Route exact path="/login" component={Login} />
				<Route exact path="/create" component={Create} />
				<Route exact path="/travels" component={TravelListView} />
				<Route exact path="/travels/create" component={TravelForm} />
				<Route exact path="/requests" component={RequestListView} />
				<Route exact path="/requests/create" component={RequestForm} />
				<Route exact path="/user/:id" component={ProfileView} />
			</Container>
		</HashRouter>
	)
};

export default Routing;