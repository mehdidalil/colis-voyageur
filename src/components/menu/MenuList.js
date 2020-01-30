import React from 'react';
import { List, ListSubheader } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MenuListItem from './MenuListItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import { Logo } from '../ui';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	list: {
		width: 250,
		marginTop: "10px"
	},
	nested: {
		paddingLeft: theme.spacing(4),
	}
}));


const MenuList = () => {
	const classes = useStyles();
	return (
		<div style={{marginTop: "20px"}}>
			<Logo medium />
			<List className={classes.list}>
				<MenuListItem text="Connexion" icon={<AccountCircleIcon />} component={RouterLink} to="/login" />
				<MenuListItem text="Inscription" icon={<CreateIcon />} component={RouterLink} to="/create" />
				<ListSubheader>
					Voyages
				</ListSubheader>
					<MenuListItem text="Consulter les voyages" component={RouterLink} to="/travels" />
				<ListSubheader>
					Demandes
				</ListSubheader>
					<MenuListItem text="Consulter les demandes" component={RouterLink} to="/requests" />
			</List>
		</div>
		
	);
};

export default MenuList;