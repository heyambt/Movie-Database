import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { APP_FOLDER_NAME } from '../globals/variables';
import Header from '../components/About';
import Home from '../components/Home';
import About from '../components/Footer';
import Footer from '../components/Footer';
import MyMovies from '../components/MyMovies';
import Nav from '../components/Nav';




const AppRouter = () => (
    <Router basename={APP_FOLDER_NAME}>
		<div className="wrapper">
			<Nav />
			<Switch>
				<Route path={'/'} exact><Home /></Route>
			</Switch>
		</div>
	</Router>
)

export default AppRouter;