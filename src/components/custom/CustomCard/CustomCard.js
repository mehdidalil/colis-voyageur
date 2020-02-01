import React from 'react';
import { makeStyles, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Chip, Button, Avatar, Card, CardHeader } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardTable from './CardTable';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	paper: {
		maxWidth: 600,
		width: "100%",
		margin: "0 auto",
		marginTop: "10px",
		marginBottom: "10px",
	},
	content: {
		width: "100%"
	},
	action: {
		marginTop: "20px",
		float: "right"
	},
}));

const CustomCard = (props) => {
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.paper}>
			<ExpansionPanel className={classes.panel}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Chip label={props.title} color={props.color} style={{marginRight: "15px"}}/>
					<div>
						<div>{props.data.departure}</div>
						<div>{props.data.arrival}</div>
					</div>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
				<div className={classes.content}>
					<div>{props.data.desc}</div>
					<CardTable info={props.data.info} />
					<Card elevation={0}>
							<CardHeader
								avatar={<Avatar src={props.user.pic} component={RouterLink} to={`/user/${props.user.id}`} />}
								title={`${props.user.firstName} ${props.user.lastName}`}
								subheader={props.user.city}
								action={<Button variant="contained" className={classes.action}>Contacter</Button>}
							/>
					</Card>
				</div>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</Paper>
	)
};

export default CustomCard;