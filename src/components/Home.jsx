import React, { Component } from 'react'
import './Home.css';
import { homeVideo } from '../constants';

export default class Home extends Component {
    render() {
        return (
            <div >
                <div className='jumbotron shadow jumbotron-home'>
                    <div className='container'>
                        <h2 className='text-white' >Get fit - physically, mentally & emotionally</h2>
                        <p className='text-white'>All you need is the right diet, some exercise and a lot of motivation.</p>
                        <br />
                        <a className="btn btn-light shadow text-dark" href="/services" role="button">Start Now!!</a>
                    </div>
                </div>
                <div className='container'>
                    <div className='show-grid row'>
                        <div className='col-md-4'>
                            <img src='/assets/home-1.jpg' className='profile-pic img-custom-shadow' alt='' />
                        </div>
                        <div className='col-md-7'>
                            <h5>My Fitness Mantra</h5>
                            <p>
                                Fitness is not about losing weight, doing lot of exercise or starving.
                        </p>
                            <p>
                                My definition of fitness is, you can eat what you like, drink what you like <span className='font-italic'>(with some tricks)</span>, be
                        active the way you want, wear the dress of your choice and start loving yourself.
                        So basically, your mind and body should give you the freedom of doing what you love.
                        </p>
                            <p>
                                Fitness is for one and all - be it housewife, working professional, senior citizen,
                        midlife people, kids & youngsters, fashion & modeling aspirants, sports person,
                        entrepreneurs or senior executives. In a broader sense, we should treat fitness like our
                        fundamental right. We have right to education, equality, speech etc then why not <strong className='text-dark'>- Right to Fitness!</strong>
                            </p>

                            <p>
                                <strong className='text-dark'> But this right shouldn't come from society, it should come from within.</strong>
                            </p>
                            <br />
                            <p>
                                <strong className='text-dark font-weight-bold'>So, realize your Right to Fitness and get going!!</strong>
                            </p>
                            <hr />
                            <a className="btn btn-info shadow" href="/contact" role="button">Get In Touch</a>
                        </div>
                    </div>

                    <br />
                    <hr className="col-md-10 offset-md-1" />
                    <br />

                    <h4 align='center'>Testimonials</h4>
                    <br />

                    <div id='carouselExampleControls' class="carousel slide jumbotron" data-ride="carousel">
                        <div class="carousel-inner" align='center'>
                            <div class="carousel-item active">
                                <div class="card text-white mb-3 shadow">
                                    <div class="card-header text-dark">Shahid Shaikh</div>
                                    <div class="card-body">
                                        <h5 class="card-title">Weight Gain Program</h5>
                                        <br/>
                                        <p class="card-text">
                                        Chandni is knowledgeable about diet and workout at the same time. She does it with the passion so results are always best.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                            <div class="card text-white mb-3 shadow">
                                    <div class="card-header text-dark">Khushboo Arora</div>
                                    <div class="card-body">
                                        <h5 class="card-title">Weight Loss Program</h5>
                                        <br/>
                                        <p class="card-text">Chandni is an awesome motivator. As I am busy professional its difficult for me to go for a strict diet but she knows the trick.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                            <div class="card text-white mb-3 shadow">
                                    <div class="card-header text-dark">Sumit Kumar</div>
                                    <div class="card-body">
                                        <h5 class="card-title">Keto Diet Program</h5>
                                        <br/>
                                        <p class="card-text">The best part of going through this program is that I never felt starving and still losing inches.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <span><i class="fa fa-2x fa-angle-left text-dark" aria-hidden="true"></i></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <span><i class="fa fa-2x fa-angle-right text-dark" aria-hidden="true"></i></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                    <br />
                    <hr className="col-md-10 offset-md-1" />
                    <br />
                    <br />

                    <h5 align='center' className='font-italic'>Please Subscribe my YouTube Channel for more videos</h5>
                    <br />
                    <div className="col-md-8 offset-md-2">
                        <iframe width='100%' height='500' src={homeVideo}></iframe>
                    </div>
                </div>
            </div>
        )
    }
}
