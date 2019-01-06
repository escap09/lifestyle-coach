import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import CustomNavBar from './components/CustomNavbar';
import Contact from './components/Contact';
import CustomFooter from './components/CustomFooter';
import Services from './components/Services';
import ReactGA from 'react-ga';

class App extends Component {

initializeReactGA() {
    ReactGA.initialize('UA-123791717-1');
    ReactGA.pageview('/');
    ReactGA.pageview('/services');
    ReactGA.pageview('/about');
    ReactGA.pageview('/contact');
}

  render() {
    return (
      <Router>
        <div>
          <CustomNavBar />
          <div className='custom-main-body'>
            <Route exact path='/' component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </div>
          <CustomFooter />
        </div>
      </Router>
    );
  }
}

export default App;
