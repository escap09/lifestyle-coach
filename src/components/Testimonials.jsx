import React, { Component } from 'react'
import './Testimonials.css';

export default class Testimonials extends Component {
    render() {
        return (
            <div id='carouselExampleControls' class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" align='center'>
                    <div class="carousel-item active">
                        <div class="card text-white mb-3 shadow">
                            <div class="card-header text-dark">Shahid Shaikh</div>
                            <div class="card-body">
                                <div className='col-md-4'>
                                    <img src='/assets/test-1.jpg' className='w-100 carousel-img' alt='testimonial1' />
                                </div>
                                <br />
                                <h5 class="card-title">Weight Gain Program</h5>
                                <br />
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
                                <div className='col-md-4'>
                                    <img src='/assets/test-2.jpg' className='w-100 carousel-img' alt='testimonial2' />
                                </div>
                                <br />
                                <h5 class="card-title">Weight Loss Program</h5>
                                <br />
                                <p class="card-text">Chandni is an awesome motivator. As I am busy professional its difficult for me to go for a strict diet but she knows the trick.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card text-white mb-3 shadow">
                            <div class="card-header text-dark">Sumit Kumar</div>
                            <div class="card-body">
                                <div className='col-md-4'>
                                    <img src='/assets/test-3.jpg' className='w-100 carousel-img' alt='testimonial3' />
                                </div>
                                <br />
                                <h5 class="card-title">Keto Lifestyle Program</h5>
                                <br />
                                <p class="card-text">The best part of going through this program is that I never felt starving and still losing inches.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card text-white mb-3 shadow">
                            <div class="card-header text-dark">Garima Rajput</div>
                            <div class="card-body">
                                <div className='col-md-4'>
                                    <img src='/assets/test-4.jpg' className='w-100 carousel-img' alt='testimonial4' />
                                </div>
                                <br />
                                <h5 class="card-title">Weight Loss Program</h5>
                                <br />
                                <p class="card-text">I have been eating incorrectly my entire life but Chandni helped me understand how important food is for a healthier lifestyle.</p>
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
        )
    }
}
