import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import movieLogo from '../images/movieLogo.png';


const Header = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
	<header >
        <div className="heading">

           <Link to={'/'}> <img className='logo' src = {movieLogo} alt="Logo" /></Link>
           <button className='hamburger' id='hamburger' onClick={() => { setIsMenuOpen(!isMenuOpen) }}>
                    Menu
                </button>
            <div className="menu">
           
		    <nav className={ isMenuOpen ? 'open' : 'closed' } >
                
                
                <ul className='nav-ul' id='nav-ul'>
                    <li className='home'><NavLink  to={'/'} exact>Home</NavLink></li>
                    <li className='about'><NavLink to={'/about'}>About</NavLink></li>
                    <li className='favorites'><NavLink to={'/favorites'}>Favorites</NavLink></li>
                </ul>
	        </nav>
            </div>
        </div>
    	

		
	</header>
    );
}



export default Header;
