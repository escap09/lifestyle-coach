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
                            <div align='center'>
                                <a href={fbLink} target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                                <a href={instaLink} target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                <a href={youtubeLink} target='_blank' rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                                <a href='/contact'><i className="fas fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
