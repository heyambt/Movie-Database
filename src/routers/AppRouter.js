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
import Footer from '../components/Footer';
<<<<<<< HEAD
import MyMovies from '../components/MyMovies';
=======
import Favorites from '../components/Favorites';
import Nav from '../components/Nav';
>>>>>>> 130e176c0128ac7e82fa0154f67beb302396b04d
import PageNotFound from '../components/PageNotFound';





const AppRouter = () => (
    <Router basename={APP_FOLDER_NAME}>
		<div className="wrapper">
			<Header />
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/about'} exact><About /></Route>
				<Route path={'/favorites'}><Favorites /></Route>
				<Route><PageNotFound /></Route>
			</Switch>
			<Footer/>
		</div>
	</Router>
)

export default AppRouter;