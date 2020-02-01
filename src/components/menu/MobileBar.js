import React from 'react';
import { AppBar, Toolbar, IconButton, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import MenuList from './MenuList';
import { Logo } from '../ui';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	list: {
		width: 250,
	},
}));

const MobileBar = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(!open);
	};
	return (
		<div>
			<AppBar position="static" className={classes.route}>
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpen}>
						<MenuIcon />
					</IconButton>
					<div style={{margin: "0 auto"}}>
						<Logo small />
					</div>
					
				</Toolbar>
			</AppBar>
			<SwipeableDrawer open={open} onClose={handleOpen}>
				<div onClick={handleOpen}>
					<MenuList />
				</div>
      		</SwipeableDrawer>
		</div>
		
		
	);
};

export default MobileBar;