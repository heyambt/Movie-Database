import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import movieLogo from '../images/movieLogo.png';

const Header = () => (
    
	<header >
        <div className="heading">
            {/* <h1><Link to={'/'}>Reels</Link></h1> */}
            <img src = {movieLogo} alt="Logo" />
            <div className="menu">
		    <nav >
                <ul>
                    <li><NavLink to={'/'} exact>Home</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/favourites'}>Favourites</NavLink></li>
                </ul>
	        </nav>
            </div>
        </div>
    	

		
	</header>
);



export default Header;
