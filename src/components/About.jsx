import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';


export default class About extends Component {
  render() {
    return (
      <div>
        <Image src='/lifestyle-coach/assets/about-header.jpg' className='header-image' />
        <Grid>
          <Col xs={10} sm={8} smOffset={2}>
            <Image src='/lifestyle-coach/assets/IMG20171125190800.jpg' className='about-profile-pic' rounded />
            <h4>About Me</h4>
            <p>
            My name is Chandni Sharma and I am a fitness enthusiast and passionate about food, exercise, yoga and being healthy. 
            I studied fashion designing and then completed MBA. Married to an Entrepreneur who is running a 
            tech startup and blessed with a teenage handsome son. Health and fitness all started as a personal 
            need and then became a passion so completed various certifications related to diet, exercise, yoga, 
            and fitness. I truly believe that overall fitness is achieved only when you are fit – physically, mentally & emotionally.
              </p>
          </Col>
          <Col xs={10} sm={8} smOffset={2}>
            <h4>Story of my fit life</h4>
            <p>
            It all started since winter of 2012 while sitting on my couch I was eating Gulab Jamuns
            and got a call from my mother that her sugar level went up again and this time it was really high.
            I was really worried, of course for my mother but for me as well as I have terribly sweet tooth and my 
            both parents are diabetic. I was gaining weight also as usual like a 9-year married housewife.
            Then I decided, I should lose some weight. I never thought that a simple decision will change my life.
              </p>
              <p>
              I started doing exercise, even joined a gym. But as it happens with most of us it never went regularly. 
              Simple, focusing mainly on exercise brings results very slow and none of us have so much patience.
              We all want faster results - right. I was not the exception so couldn’t be regular in my exercise.
              My hunt started, what went wrong. After months of exploration, I concluded to same theory what most of the 
              fitness experts say – it’s all about good diet only. So, this time I focused on a diet along with my exercise 
              but then I realized that how do you continue this for months and years. Fitness is a campaign, a projector 
              forever phenomena? Actually, it is a lifestyle, once a fit you always want to remain fit but how to keep 
              moving and make this short-term project a lifestyle. You are right, for this, you need a lot of motivation.
              So finally, my own theory came like – fit lifestyle is about right diet, some exercise and a lot of motivation.
              </p>
          </Col>
        </Grid>
      </div>
    )
  }
}
