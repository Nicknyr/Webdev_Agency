import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
//import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Nav from 'react-bootstrap/lib/Nav';
//import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Button, 'custom');


const NavHeader = () => {
    return (
        <Navbar inverse collapseOnSelect fixedTop >
        <Navbar.Header>
            <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight className="nav-menu">
            <NavItem eventKey={1} href="#" className="nav-menu-item">
                Home
            </NavItem>
            <NavItem eventKey={2} href="#" className="nav-menu-item">
                Expertise
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
            <NavItem eventKey={7} href="#" className="nav-menu-item">
                Work with us
            </NavItem>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default NavHeader;
