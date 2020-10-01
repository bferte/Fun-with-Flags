import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            
           
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to ="/" activeClassName='navActive'>
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ="/quizz" activeClassName='navActive'>
                            <i className="fas fa-question"></i>
                            <span>Quizz</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ="/contact" activeClassName='navActive'>
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                    
                </ul>
            </div>


        </div>
    );
};

export default Navigation;