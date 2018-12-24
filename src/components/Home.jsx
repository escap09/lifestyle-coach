import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Get fit - physically, mentally & emotionally</h2>
                    <p>All you need is the right diet, some exercise and a lot of motivation.</p>
                    <Link to='/about'>
                        <Button bsStyle='primary'>About Me</Button>
                    </Link>
                </Jumbotron>
                <Row className='show-grid'>
                    <Col xs={10} sm={4}>
                        <Image src='assets/IMG20171221083154.jpg' className='profile-pic' rounded />
                    </Col>
                    <Col xs={10} sm={6} smOffset={0}>
                        <h4>My definition of fitness</h4>
                        <p>
                            Fitness is not about losing body weight or doing a lot of exercises or going on starvation.
                            My definition of fitness is when you can do eat what you want, drink what you want, be active
                            the way you want, wear the dress of your choice and start loving yourself. Actually,
                            your body and mind should allow you to do all that you want to do. Fitness is for all - be it
                            housewife, working professional, senior citizen, midlife citizens, kids & youngsters, fashion &
                            modeling aspirants, sports person, entrepreneurs or senior executives. Frankly speaking, we
                            should treat fitness like a fundamental right. We have the right to education, equality, speech etc then why not -
                            Right to fitness!
                        </p>
                        <br />
                        <p>
                            But this right does not come from society, it is the right which comes from within.
                        </p>
                        <p>
                            So, realize your Right to Fitness!!
                        </p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
