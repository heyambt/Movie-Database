import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import movieLogo from '../images/movieLogo.png';

const Header = () => (
    
	<header >
        <div className="heading">

           <Link to={'/'}> <img className='logo' src = {movieLogo} alt="Logo" /></Link>
            <div className="menu">
		    <nav >
                <ul>
                    <li><NavLink to={'/'} exact>Home</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/favorites'}>Favorites</NavLink></li>
                </ul>
	        </nav>
            </div>
        </div>
    	

		
	</header>
);



export default Header;
