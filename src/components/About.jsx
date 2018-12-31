import React, { Component } from 'react'
import './About.css';
import { aboutVideo } from '../constants';

export default class About extends Component {
  render() {
    return (
      <div>
        <img src="/assets/backdrop.jpg" className="header-image" alt='' />
        <div className="container">
          <div className="col-md-8 offset-md-2">
            <img src="/assets/about.jpg" className="about-profile-pic img-custom-shadow" alt='' />
            <h5>About Me</h5>
            <p>
              My name is Chandni Sharma and I am a fitness enthusiast and passionate about food, exercise, yoga and being healthy.
            I studied fashion designing and then completed MBA. I am married to an Entrepreneur who is running a
            tech startup and blessed with a teenage handsome son.
            </p>
            <p>
              Health and fitness all started as a personal
            need and then became a passion so completed various certifications related to diet, exercise, yoga,
            and fitness. I truly believe that overall fitness is achieved <strong className='text-dark'>only when you are fit – physically, mentally & emotionally.</strong>
            </p>
          </div>
          <br />
          <hr className="col-md-6 offset-md-3" />
          <br />
          <div className="col-md-8 offset-md-2">
            <img src="/assets/about-before.jpg" className="about-before-pic img-custom-shadow" alt='' />
            <h5>Story of my fit life</h5>
            <p>
              It all started since winter of 2012 while sitting on my couch I was eating <span className='font-italic'>Gulag Jamuns</span> and got
            a call from my mother that her sugar level went up again and this time it was really high.
            </p>
            <p>
              I was really worried, of course for my mother but for me as well as I have terribly sweet tooth and both
            my parents are diabetic. I was gaining weight like a usual housewife who is been married for nine
            years would.
            </p>
            <p>
              Then I decided on loosing some weight. I never imagined that a simple decision could be
            a <strong className='text-dark'>game changer</strong>.
            </p>
            <br />
            <img src="/assets/about-after.jpg" className="about-during-pic img-custom-shadow" alt='' />
            <p>
              I started exercising, even joined gym. But as it happens for most of us, I was never regular.
              Focusing mainly on exercising brings very slow results and none of us have that kind of patience.
              Living in this instant world, everybody wants faster results - right? I was not an exception.
              I was sure that something isin't right!
              </p>
            <p>
              After months of exploring I concluded to same theory what
              most fitness experts would say <strong className='text-dark'> – it’s all about good diet, exercise regime and a positive attitude. </strong>
              So, this time I focused on diet along with my exercise but then I realized that how can I continue
              this forever? Fitness is a one time thing or a life long commitment?  Actually, it's a lifestyle,
              once fit you always want to remain fit but how to keep committed forever? You got this, motivation
              is the only key.
              </p>
            <p>
              <strong className='text-dark'>So finally I came up with my own theory</strong> <strong className='text-dark font-weight-bold text-info'>– fitness is about right diet, some exercise
              and lot of motivation to keep going.</strong>
            </p>
          </div>

          <br />
          <hr className="col-md-6 offset-md-3" />
          <br />

          <h5 align='center' className='font-italic'>Certificates</h5>
          <br />
        </div>
        {/* <div className='jumbotron'> */}
          <div className='container'>
            <div className="col-md-8 offset-md-2">
              <img src="/assets/certificates.jpg" className="custom-cert" alt='' />
            </div>
          </div>
        {/* </div> */}

        <br />
        <hr className="col-md-6 offset-md-3" />
        <br />

        <h5 align='center' className='font-italic'>Please Subscribe my YouTube Channel for more videos</h5>
        <br />
        <div className="col-md-8 offset-md-2">
          <iframe width='100%' height='500'  src={aboutVideo}></iframe>
        </div>
      </div>
    )
  }
}
