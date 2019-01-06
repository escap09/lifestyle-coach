import React, { Component } from 'react'
import './Testimonials.css';

export default class Testimonials extends Component {
    render() {
        return (
            <div id='carouselExampleControls' className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" align='center'>
                    <div className="carousel-item active">
                        <div className="card text-white mb-3 shadow">
                            <div className="card-header text-dark">Shahid Shaikh</div>
                            <div className="card-body">
                                <div className='col-md-4'>
                                    <img src='/assets/test-1.jpg' className='w-100 carousel-img' alt='testimonial1' />
                                </div>
                                <br />
                                <h5 className="card-title">Weight Gain Program</h5>
                                <br />
                                <p className="card-text">
                                    Chandni is knowledgeable about diet and workout at the same time. She does it with the passion so results are always best.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card text-white mb-3 shadow">
                            <div className="card-header text-dark">Khushboo Arora</div>
                            <div className="card-body">
                                <div className='col-md-4'>
                                    <img src='/assets/test-2.jpg' className='w-100 carousel-img' alt='testimonial2' />
                                </div>
                                <br />
                                <h5 className="card-title">Weight Loss Program</h5>
                                <br />
                                <p className="card-text">Chandni is an awesome motivator. As I am busy professional its difficult for me to go for a strict diet but she knows the trick.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card text-white mb-3 shadow">
                            <div className="card-header text-dark">Sumit Kumar</div>
                            <div className="card-body">
                                <div className='col-md-4'>
                                    <img src='/assets/test-3.jpg' className='w-100 carousel-img' alt='testimonial3' />
                                </div>
                                <br />
                                <h5 className="card-title">Keto Lifestyle Program</h5>
                                <br />
                                <p className="card-text">The best part of going through this program is that I never felt starving and still losing inches.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card text-white mb-3 shadow">
                            <div className="card-header text-dark">Garima Rajput</div>
                            <div className="card-body">
                                <div className='col-md-4'>
                                    <img src='/assets/test-4.jpg' className='w-100 carousel-img' alt='testimonial4' />
                                </div>
                                <br />
                                <h5 className="card-title">Weight Loss Program</h5>
                                <br />
                                <p className="card-text">I have been eating incorrectly my entire life but Chandni helped me understand how important food is for a healthier lifestyle.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <span><i className="fa fa-2x fa-angle-left text-dark" aria-hidden="true"></i></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                    <span><i className="fa fa-2x fa-angle-right text-dark" aria-hidden="true"></i></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}
