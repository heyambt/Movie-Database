import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
	Route,
  } from "react-router-dom";

import { APP_FOLDER_NAME } from '../globals/variables';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import SingleMovie from '../components/SingleMovie';
import MovieGrid from '../components/MovieGrid';
import Footer from '../components/Footer';
import Favorite from '../components/Favorite';
import PageNotFound from '../components/PageNotFound';





const AppRouter = () => (
    <Router basename={APP_FOLDER_NAME}>
		<div className="wrapper">
			<Header />
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/about'} exact><About /></Route>
				<Route path={'/favorites'} exact><Favorite /></Route>
				<Route path={'/singlemovie/:id'}><SingleMovie /></Route>
				<Route path={'/moviegrid' }> <MovieGrid /></Route>
				<Route path={'/*'}><PageNotFound /></Route>
			</Switch>
			<Footer/>
		</div>
	</Router>
)

export default AppRouter;