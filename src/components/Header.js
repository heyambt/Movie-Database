import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header className="heading">
    	<h1><Link to={'/'}>My Movie Database</Link></h1>
	</header>
);


export default Header;