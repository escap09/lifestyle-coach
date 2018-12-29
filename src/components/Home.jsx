import React, { Component } from 'react'
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className='container'>
                <div className='jumbotron shadow'>
                    <h2>Get fit - physically, mentally & emotionally</h2>
                    <p>All you need is the right diet, some exercise and a lot of motivation.</p>
                    <a className="btn btn-info shadow" href="/about" role="button">About Me</a>
                </div>
                <div className='show-grid row'>
                    <div className='col-md-4'>
                        <img src='/assets/IMG20171221083154.jpg' className='profile-pic' alt=''/>
                    </div>
                    <div className='col-md-7'>
                        <h4>My definition of fitness</h4>
                        <p>
                        Fitness is not about losing weight, doing lot of exercise or starving.
                        My definition of fitness is, you can eat what you like, drink what you like, be
                        active the way you want, wear the dress of your choice and start loving yourself.
                        So basically, your mind and body should give you the freedom of doing what you love.
                        Fitness is for one and all - be it housewife, working professional, senior citizen,
                        midlife people, kids & youngsters, fashion & modeling aspirants, sports person,
                        entrepreneurs or senior executives. In a broader sense, we should treat fitness like our
                        fundamental right. We have right to education, equality, speech etc then why not - Right to fitness!
                        </p>
                        <p>
                            But this right shouldn't come from society, it should come from within.
                        </p>
                        <br />
                        <p>
                            So, realize your Right to Fitness and get going!!
                        </p>
                        <hr />
                        <a className="btn btn-warning shadow" href="/contact" role="button">Get In Touch</a>
                    </div>
                </div>
            </div>
        )
    }
}
