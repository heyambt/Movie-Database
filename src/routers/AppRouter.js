import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
	Route,
	Link
  } from "react-router-dom";

import { APP_FOLDER_NAME } from '../globals/variables';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import SingleMovie from '../components/SingleMovie';
import Footer from '../components/Footer';
import Favorites from '../components/Favorites';
import PageNotFound from '../components/PageNotFound';





const AppRouter = () => (
    <Router basename={APP_FOLDER_NAME}>
		<div className="wrapper">
			<Header />
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/about'} exact><About /></Route>
				<Route path={'/favorites'} exact><Favorites /></Route>
				<Route path={'/singlemovie/:id'}><SingleMovie /></Route>
				<Route><PageNotFound /></Route>
			</Switch>
			<Footer/>
		</div>
	</Router>
)

export default AppRouter;