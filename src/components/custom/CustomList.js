import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	table: {
		maxWidth: 600,
		width: "100%"
	},
	title: {
		paddingTop: "10px",
		paddingBottom: "10px",
	},
	headCell: {
		textAlign: "center",
		fontWeight: "bold"
	}
}));

const CustomList = (props) => {
	const classes = useStyles();
	return (
	<Paper elevation={3} className={classes.table}>
		<Typography
			variant="h4"
			component="h4"
			align="center"
			className={classes.title}
		>
			{props.title}
		</Typography>
		<TableContainer>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						{props.headers.map((v, k) => (
							<TableCell key={k} className={classes.headCell}>{v}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{props.rows.map((row, rowKey) => (
						<TableRow key={rowKey} hover>
							{row.map((cell, cellKey) => (
								<TableCell key={cellKey} align="center">{cell}</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	</Paper>
	);
};

export default CustomList;