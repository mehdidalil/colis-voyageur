import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link as RouterLink } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import { Logo } from '../ui';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuRight: {
		marginRight: theme.spacing(3),
	},
	accountButtons: {
		marginLeft: "auto",
	},
}));

const NavBar = () => {
	const classes = useStyles();
	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<Logo small />
				<Button color="primary" variant="contained" component={RouterLink} to="/">
					Accueil
				</Button>
				<Button color="primary" variant="contained" component={RouterLink} to="/travels/">
					Voyages
				</Button>
				<Button color="primary" variant="contained" component={RouterLink} to="/requests/">
					Demandes
				</Button>
				<div className={classes.accountButtons}>
					<Button color="primary" variant="contained" startIcon={<AccountCircleIcon />} component={RouterLink} to="/login/">
						Connexion
					</Button>
					<Button color="primary" variant="contained" startIcon={<CreateIcon />} component={RouterLink} to="/create/">
						Inscription
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;