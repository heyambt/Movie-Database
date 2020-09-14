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
import SearchBar from  '../components/SearchBar';
import About from '../components/About';
import Footer from '../components/Footer';
import MyMovies from '../components/MyMovies';
import Nav from '../components/Nav';
import PageNotFound from '../components/PageNotFound';





const AppRouter = () => (
    <Router basename={APP_FOLDER_NAME}>
		<div className="wrapper">
			<Header />
			<Nav />
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/about'} exact><About /></Route>
				<Route><PageNotFound /></Route>
			</Switch>
			<Footer/>
		</div>
	</Router>
)

export default AppRouter;