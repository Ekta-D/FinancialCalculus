import React from 'react';
import { Bars, Nav, NavBtnLink, NavLink, NavMenu } from './NavBarElements';

const NavBar = () => {
  return (
    <>
   
   <Nav>
    <NavLink to="/">

    <h1>Logo</h1>     
    </NavLink>

    <Bars/>
    <NavMenu>
        <NavLink to="/about" activeStyle>
            About
        </NavLink>
        <NavLink to="/dashboard" activeStyle>
            Dashboard
        </NavLink>
        <NavLink to="/help" activeStyle>
            Help
        </NavLink>
        <NavLink to="/contact" activeStyle>
            Contact Us
        </NavLink>
    </NavMenu> 
   </Nav>
    </>
  );
};

export default NavBar
