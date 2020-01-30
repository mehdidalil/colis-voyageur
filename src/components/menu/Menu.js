import React from 'react';
import NavBar from './NavBar';
import MobileBar from './MobileBar';
import { useMediaQuery, useTheme } from '@material-ui/core';

const Menu = (props) => {
	const theme = useTheme();
	const checkSize = useMediaQuery(theme.breakpoints.up('md'));
	return (
		<div>
			{checkSize ? <NavBar /> : <MobileBar />}
		</div>
	);
};

export default Menu;