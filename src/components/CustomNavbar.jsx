import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavBar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect fixedTop>
                <Navbar.Header>
                    {/* <Navbar.Brand>
                        <Link to='/'>Chandni.Fit</Link>
                    </Navbar.Brand> */}
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href='/lifestyle-coach/' to='/lifestyle-coach/'>Home</NavItem>
                        <NavItem eventKey={2} componentClass={Link} href='/lifestyle-coach/about' to='/lifestyle-coach/about'>About</NavItem>
                        <NavItem eventKey={3} componentClass={Link} href='/lifestyle-coach/contact' to='/lifestyle-coach/contact'>Contact</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
