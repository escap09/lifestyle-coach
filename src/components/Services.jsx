import React, { Component } from 'react'
import './Services.css';


export default class Services extends Component {
    render() {
        return (
            <div>
                <img src="/assets/service-banner.jpg" className="header-image w-100" alt='services' />
                <div className='container'>
                    <div className="col-md-8 offset-md-2">
                        <h4 align='center'>Services</h4>
                    </div>
                    <br/>
                    <div className="col-md-8 offset-md-2">
                        <h5>Weight Management program – DO</h5>
                        <p>
                            Nowadays most of the people are struggling with their weight.
                    Some are overweight, some are underweight & some are not even aware of what is
                    the right weight according to their height, sex & age. Weight management is
                    about managing your healthy body weight and adopting a lifestyle that is sustainable
                    over a longer period and not just a crash course.
                        </p>
                        <h5>Weight Management program – DE</h5>
                        <p>
                            This is a special program for aspirants who are looking for more active lifestyle.
                        In addition to the diet plan, you will also be given exercise plan which suits your body
                        type and can be managed through home workout. So need not worry if you cannot go to gym.
                        </p>

                        <h5>Keto lifestyle program</h5>
                        <p>
                            Keto is lifestyle and not just diet plan. It is a specially designed diet
                        plan which enhances ketosis in your body and help you burn fat very fast. Gradually
                        as per controlled process, your body is reduced on carbs and loaded with fat. Slowly
                        your body start taking energy from fat and eventually it starts burning fat which is
                        already accumulated in your body.
                        </p>

                        <h5>HIIT group classes</h5>
                        <p>
                            This is High Intensity Interval Training which is non-stop loop of 20 sec high
                        intensity work out with 10 sec rest. It’s actually for those who want to burn more
                        calories in short span. No time but are ready to go extra mile in your intensity.
                        It is generally a group session so if you are minimum 5 people, you may enroll for HIIT
                        group classes at your place.
                        </p>

                        <h5>YOGA group Classes</h5>
                        <p>
                            It is all about lot of stretching but more importantly it creates balance by
                        increasing flexibility and strength. It requires lot of patience but results are
                        long lasting. It is generally a group session so if you are minimum 5 people,
                        you may enroll for YOGA group classes at your place.
                        </p>
                    </div>

                    <br />
                    <hr className="col-md-6 offset-md-3" />
                    <br />

                    <div className="col-md-8 offset-md-2">
                        <h4 align='center'>How it works</h4>
                    </div>

                    <br />

                    <div className='row' align='center'>
                        <div className="col-md-4">
                            <img src='/assets/get-ready.jpg' className='img-custom-margin' alt='Get Ready' />
                            <h5>Get Ready</h5>
                            <p>
                                To understand you better, know your food & exercise preferences and articulate your objective.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src='/assets/get-fit.jpg' className='img-custom-margin' alt='Get Fit' />
                            <h5>Get Fit</h5>
                            <p>
                                Start your fitness journey, hand holding, regular review and interactions to keep you enough motivated.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src='/assets/remain-fit.jpg' className='img-custom-margin' alt='Remain Fit' />
                            <h5>Remain Fit</h5>
                            <p>
                                Giving you bonus tips, so you maintain what you have acheived and continue living active and healthy lifestyle.
                            </p>
                        </div>
                    </div>

                    <br />
                    <hr className="col-md-6 offset-md-3" />
                    <br />

                    <div className="col-md-8 offset-md-2">
                        <h4 align='center'>Consultation Plans</h4>
                    </div>

                    <br />

                    <table class="table table-sm table-bordered text-center" align='center'>
                        <thead className='table-primary'>
                            <tr>
                                <th scope="col">Program</th>
                                <th scope="col">Type</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Planned Review</th>
                                <th scope="col">Fee (INR)</th>
                                <th scope="col">Fee (USD)</th>
                            </tr>
                        </thead>
                        <tbody className='font-weight-light'>
                            <tr>
                                <td>Weight Management program – DO</td>
                                <td>Diet Only</td>
                                <td>3 Months</td>
                                <td>15 Days</td>
                                <td>&#8377; 9,000</td>
                                <td>$ 200</td>
                            </tr>
                            <tr>
                                <td>Weight Management program – DE</td>
                                <td>Diet & Exercise</td>
                                <td>3 Months</td>
                                <td>15 Days</td>
                                <td>&#8377; 12,000</td>
                                <td>$ 270</td>
                            </tr>
                            <tr>
                                <td>Keto lifestyle program</td>
                                <td>Diet Only</td>
                                <td>3 Months</td>
                                <td>7 Days</td>
                                <td>&#8377; 12,000</td>
                                <td>$ 270</td>
                            </tr>
                            <tr>
                                <td>HIIT group classes</td>
                                <td>Exercise Only</td>
                                <td colSpan='4'>For details please contact (only for Mumbai aspirants at present)</td>
                            </tr>
                            <tr>
                                <td>YOGA group Classes</td>
                                <td>Exercise Only</td>
                                <td colSpan='4'>For details please contact (only for Mumbai aspirants at present)</td>
                            </tr>
                        </tbody>

                    </table>
                    <br />
                    <div className='col-md-8 offset-md-1'>
                        <p className='font-weight-light text-dark foot-note-custom'>
                            # no exercise plan includes any personal training<br />
                            # no diet plan includes any supplies or food items<br />
                            # all consulting interactions will be over phone, email & WhatsApp<br/>
                            # planned review will be the duration in which program will not change, unless needed
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
