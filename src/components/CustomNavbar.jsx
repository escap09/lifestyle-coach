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
                        <NavItem eventKey={1} componentClass={Link} href='/' to='/'>Home</NavItem>
                        <NavItem eventKey={2} componentClass={Link} href='/about' to='/about'>About</NavItem>
                        <NavItem eventKey={3} componentClass={Link} href='/contact' to='/contact'>Contact</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
