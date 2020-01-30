import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	table: {
		paddingTop: "20px"
	}
}));

const CardTable = (props) => {
	const classes = useStyles();
	return (
		<TableContainer className={classes.table}>
			<Table>
				<TableHead>
					<TableRow>
						{Object.entries(props.info).map(([key, value]) => (
							<TableCell key={key} style={{fontWeight: "bold"}} align="center">{key}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						{Object.entries(props.info).map(([key, value]) => (
							<TableCell key={value} align="center">{value}</TableCell>
						))}
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CardTable;