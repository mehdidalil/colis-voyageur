import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { TravelCard } from '../travel';
import { RequestCard } from '../request';
import { connect } from 'react-redux';
import { FilterPanel } from '../panel';
import { useInputState } from '../hooks';
import initInputs from '../account/utils/initInputs';

const useStyles = makeStyles(theme => ({
	grid: {
		width: "100%"
	}
}))

const ListView = (props) => {
	const classes = useStyles();
	let inputs = [];
	props.data.forEach(dat => (Object.entries(dat).forEach(([k, v]) => {
		if (k === "type")
			inputs.push(v);
	})));
	inputs = [...new Set(inputs)].map(input => ({id: input, label: input}));
	const inputHandler = useInputState(initInputs(inputs, true));
	const dataFilt = props.data.filter(dat => {
		if (inputHandler.content[dat.type].value === true)
			return (true);
		return (false);
	});
	return (
		<Grid container spacing={2} justify="center" className={classes.grid}>
			<Grid item xs={10} sm={4}>
				<FilterPanel inputs={inputs} inputHandler={inputHandler} />
			</Grid>
			<Grid item xs={12} sm={8}>
				{dataFilt.map((data, k) => (
					<props.component key={k} data={data} />
				))}
			</Grid>
		</Grid>
	);
};

export default ListView;