import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
	<main>
		<section className="home-button">
			<h2>404 ... : (</h2>
			<p>Sorry you have no favourited movies. Return to the home page to add a favourite movie.</p>
			<p><Link to= "/"><button>Home</button></Link></p>
		</section>
	</main>
);


export default PageNotFound;