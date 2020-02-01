import React from 'react';
import { Paper, makeStyles, Grid, Typography, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	paper: {
		//maxWidth: 300,
		width: "100%",
		margin: "0 auto",
		marginTop: "10px",
		marginBottom: "10px",
	},
	grid: {
		padding: "20px 20px 20px 20px"
	}
}))
const FilterPanel = (props) => {
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.paper}>
			<Grid container spacing={2} className={classes.grid}>
				<Grid item xs={12}>
					<Typography component="h6" variant="h6" align="center">Type</Typography>
					<FormGroup>
						{props.inputs.map(input => {
							const { value } = props.inputHandler.content[input.id];
							return (
							<FormControlLabel
								key={input.id}
								control={
									<Checkbox
										key={input.id}
										id={input.id}
										checked={value}
										onChange={(evt) => props.inputHandler.bind.onChange(evt, evt.target.checked)}
										color="secondary"
									/>
								}
								label={input.label}
							/>
						)})}
					</FormGroup>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default FilterPanel;