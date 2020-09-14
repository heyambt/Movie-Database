import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
	<main>
		<section className="home-button">
			<h2>404 ... : (</h2>
			<p>Page not found.</p>
			<p>Go to <Link to= "/"><button>Home</button></Link></p>
		</section>
	</main>
);


export default PageNotFound;