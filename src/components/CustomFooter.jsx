import React, { Component } from 'react'
import './CustomFooter.css';
import { Jumbotron } from 'react-bootstrap';

export default class CustomFooter extends Component {
    render() {
        return (
            <footer>
                <div className='upper-footer'>
                    <hr />
                    <div>
                        <Jumbotron className='jumbotron-footer'>
                            <div align='center'>
                                <a href='http://facebook.com' target='_blank'><i className="fab fa-facebook"></i></a>
                                <a href='https://www.instagram.com/chandni_sharma06/' target='_blank'><i className="fab fa-instagram"></i></a>
                                <a href='http://youtube.com' target='_blank'><i class="fab fa-youtube"></i></a>
                                <a href='/contact'><i class="fas fa-envelope"></i></a>
                            </div>
                        </Jumbotron>
                    </div>
                </div>
            </footer>
        )
    }
}
