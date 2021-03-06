import React, { Component } from 'react'
import './CustomFooter.css';
import { fbLink, instaLink, youtubeLink } from '../constants';

export default class CustomFooter extends Component {
    render() {
        return (
            <footer>
                <div className='upper-footer'>
                    <div>
                        <div className='jumbotron jumbotron-footer'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-4' align='center'>
                                        <img src="/assets/logo.png" width="160" height="35" className="d-inline-block align-top" alt="footer logo" />
                                    </div>
                                    <br />
                                    <br/>
                                    <div className='col-md-3 offset-md-0' align='center'>
                                        <a href={fbLink} target='_blank' rel="noopener noreferrer" data-toggle='tooltip' title='facebook'><i className="fab fa-facebook"></i></a>
                                        <a href={instaLink} target='_blank' rel="noopener noreferrer" data-toggle='tooltip' title='instagram'><i className="fab fa-instagram"></i></a>
                                        <a href={youtubeLink} target='_blank' rel="noopener noreferrer" data-toggle='tooltip' title='youTube'><i className="fab fa-youtube"></i></a>
                                        <a href='/contact' data-toggle='tooltip' title='contact'><i className="fas fa-envelope"></i></a>
                                    </div>
                                    <br />
                                    <br />
                                    <div className='col-md-3 offset-md-1' align='center'>
                                        <div className='footer-text font-weight-light'>Mail: chandni.fit@gmail.com</div>
                                        <div className='footer-text font-weight-light'>Phone: +91 8652798362</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
