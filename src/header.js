import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <div className="consistent-header">
                    <h1>WELCOME TO REACT WARMUP, WEEK 3</h1>
                </div>
                <div className="links-box">
                    <NavLink exact to="/" className="home-link">Home</NavLink>
                    <NavLink to="/cats" className="main-page-link">Cats</NavLink>
                    <NavLink to="/dogs" className="main-page-link">Dogs</NavLink>
                </div>
            </header>
         );
    }
}
 
export default Header;