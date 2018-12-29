import React, { Component } from 'react'
import './About.css';


export default class About extends Component {
  render() {
    return (
      <div><img src="/assets/about-header.jpg" className="header-image" alt=''/>
        <div className="container">
          <div className="col-md-12">
            <img src="/assets/IMG20171125190800.jpg" className="about-profile-pic rounded" alt=''/>
            <h4>About Me</h4>
            <p>
              My name is Chandni Sharma and I am a fitness enthusiast and passionate about food, exercise, yoga and being healthy.
            I studied fashion designing and then completed MBA. Married to an Entrepreneur who is running a
            tech startup and blessed with a teenage handsome son. Health and fitness all started as a personal
            need and then became a passion so completed various certifications related to diet, exercise, yoga,
            and fitness. I truly believe that overall fitness is achieved only when you are fit – physically, mentally & emotionally.
            </p>
          </div>
          <div className="col-md-12">
            <h4>Story of my fit life</h4>
            <p>
              It all started since winter of 2012 while sitting on my couch I was eating Gulag Jamuns and got
            a call from my mother that her sugar level went up again and this time it was really high. I was
            really worried, of course for my mother but for me as well as I have terribly sweet tooth and both
            my parents are diabetic. I was gaining weight like a usual housewife who is been married for nine
            years would. Then I decided on loosing some weight. I never imagined that a simple decision could be
            a game changer.
              </p>
            <p>
              I started exercising, even joined gym. But as it happens for most of us, I was never regular.
              Focusing mainly on exercising brings very slow results and none of us have that kind of patience.
              Living in this instant world, everybody wants faster results - right. I was not an exception.
              I was sure that something isin't right! After months of exploring I concluded to same theory what
              most fitness experts would say – it’s all about good diet, exercise regime and a positive attitude.
              So, this time I focused on diet along with my exercise but then I realized that how do you continue
              this forever? Fitness is a one time thing or a life long commitment?  Actually, it's a lifestyle,
              once fit you always want to remain fit but how to keep committed forever? You got this, motivation
              is the only key. So finally I came up with my own theory – fitness is about right diet, some exercise
              and lot of motivation to keep going.
              </p>
          </div>
        </div>
      </div>
    )
  }
}
