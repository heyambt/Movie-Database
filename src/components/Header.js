import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Header = () => (
    
	<header className="heading">
        <div>
            <h1><Link to={'/'}>Reels</Link></h1>
            
		    <nav className="menu">
                <ul>
                    <li><NavLink to={'/'} exact>Home</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/favourites'}>Favourites</NavLink></li>
                </ul>
	        </nav>
        </div>
    	

		
	</header>
);



export default Header;
