import "./App.css";
import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core"
import { useDispatch } from "react-redux";
import {getPosts} from "./actions/posts";

import Posts from './components/posts/posts.js'
import Form from './components/form/form.js'
import useStyles from './styles'

const App = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<div>
			<Container maxwidth="lg">
				<AppBar className = {classes.appBar} position = "static" color= "inherit">
					<Typography className = {classes.heading} variant = "h2" align = "center">
						Announcement
					</Typography>
				</AppBar>
				<Grow in>
					<Container>
						<Grid container justify="space-between" alignItems = "stretch" spacing = {3}>
							<Grid item xs={12} sm={7}>
								<Posts/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Form />
							</Grid>
						</Grid>
					</Container>
				</Grow>
			</Container>
		</div>
	);
};

export default App;
