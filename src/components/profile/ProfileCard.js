import React from 'react';
import { Paper, Avatar, makeStyles, Typography, Container, Divider, Button } from '@material-ui/core';
import { TravelCard } from '../travel';
import { RequestCard } from '../request';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	paper: {
		width: 600
	},
	container: {
		display: "flex",
		justifyContent: "center"
	},
	avatar: {
		width: theme.spacing(20),
		height: theme.spacing(20),
		margin: "0 auto",
		marginTop: "20px",
		marginBottom: "10px",
	},
	desc: {
		marginTop: "20px",
		marginBottom: "20px"
	},
	buttonContainer: {
		marginTop: "20px",
		marginBottom: "20px",
		display: "flex",
		justifyContent: "center",
	},
	buttons: {
		marginLeft: "5px",
		marginRight: "5px",
	},
	name: {
		marginBottom: "5px"
	},
	city: {
		color: theme.palette.grey[400],
	}
}));

const ProfileCard = (props) => {
	const classes = useStyles();
	console.log(props.user.pic)
	return (
		<Paper elevation={3} className={classes.paper}>
			<Container>
				<Avatar src={props.user.pic} className={classes.avatar} />
				<Typography component="h4" variant="h4" align="center" className={classes.name}>{props.user.firstName} {props.user.lastName}</Typography>
				<Typography component="h6" variant="h6" align="center" className={classes.city}>{props.user.city}</Typography>
				<p className={classes.desc}>
					{props.user.desc}
				</p>
				<Divider />
			</Container>
			<Container className={classes.buttonContainer}>
				<Button
					size="small"
					variant="contained"
					color="primary"
					className={classes.buttons}
					component={RouterLink}
					to="/travels/create"
				>
					Créer un voyage
				</Button>
				<Button
					size="small"
					variant="contained"
					color="secondary"
					className={classes.buttons}
					component={RouterLink}
					to="/requests/create"
				>
					Créer une demande
				</Button>
			</Container>
			<Container>
				<Typography component="h6" variant="h6" align="center" style={{marginTop: "10px"}}>Voyages prévus</Typography>
				{props.travels.map((travel, k) => (
					<TravelCard key={k} data={travel} />
				))}
				<Typography component="h6" variant="h6" align="center" style={{marginTop: "10px"}}>Demandes en cours</Typography>
				{props.requests.map((request, k) => (
					<RequestCard key={k} data={request} />
				))}
			</Container>
		</Paper>
	);
};

export default ProfileCard;
