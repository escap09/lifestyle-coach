import React, { Component } from 'react'
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div >
                <div className='jumbotron shadow bg-info jumbotron-home'>
                <div className='container'>
                    <h2 className='text-white' >Get fit - physically, mentally & emotionally</h2>
                    <p className='text-white'>All you need is the right diet, some exercise and a lot of motivation.</p>
                    <br />
                    <a className="btn btn-light shadow text-dark" href="/about" role="button">Products & Services</a>
                </div>
                </div>

                <div className='container'>
                    <div className='show-grid row'>
                        <div className='col-md-4'>
                            <img src='/assets/home-1.jpg' className='profile-pic' alt='' />
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
                            <a className="btn btn-outline-secondary shadow" href="/contact" role="button">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
