import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
//import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Nav from 'react-bootstrap/lib/Nav';
//import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import Image from 'react-bootstrap/lib/Image';
import Logo from './images/logo-white.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

bootstrapUtils.addStyle(Button, 'custom');


const NavHeader = () => {
    return (
        <Navbar inverse collapseOnSelect fixedTop >
        <Navbar.Header>
            <Navbar.Brand>
              <NavLink to="/">
                <Image src={Logo} width={200} />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight className="nav-menu">
            <NavItem eventKey={1} href="#" className="nav-menu-item">
                <Link to="/">Home</Link>
            </NavItem>
            {/*}<NavItem eventKey={2} href="#" className="nav-menu-item" id="menu-hover-link">
                Expertise
            </NavItem>*/}
            <NavItem eventKey={2} href="#" className="nav-menu-item">
              <div className="dropdown">
                <button>Expertise</button>
                <i class="fa fa-caret-down"></i>
              </div>
                <div class="dropdown-content">
                 <a href="#/">Link 1</a>
                 <a href="#/">Link 2</a>
                 <a href="#/">Link 3</a>
               </div>
            </NavItem>
            <NavItem eventKey={3} href="#" className="nav-menu-item">
                Pricing
            </NavItem>
            <NavItem eventKey={4} href="#" className="nav-menu-item">
                Portfolio
            </NavItem>
            <NavItem eventKey={5} href="#" className="nav-menu-item">
                Our Team
            </NavItem>
            <NavItem eventKey={6} href="#" className="nav-menu-item">
                Blog
            </NavItem>
            <NavItem eventKey={7} href="#" className="nav-menu-item contact-nav-button">
                <Link to="/contact">Work with us</Link>
            </NavItem>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default NavHeader;
