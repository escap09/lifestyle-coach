import React, { Component } from 'react'
import './CustomNavbar.css';

export default class CustomNavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom">
                <div className='container'>
                    <a className="navbar-brand" href="/">
                        <img src="/assets/logo.png" width="180" height="53" className="d-inline-block align-top" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>  
                </div>
            </nav>
        )
    }
}
