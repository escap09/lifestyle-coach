import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import CustomNavBar from './components/CustomNavbar';
import Contact from './components/Contact';
import CustomFooter from './components/CustomFooter';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavBar />
          <div className='custom-main-body'>
            <Route exact path='/lifestyle-coach/' component={Home} />
            <Route path='/lifestyle-coach/about' component={About} />
            <Route path='/lifestyle-coach/contact' component={Contact} />
          </div>
          <CustomFooter />
        </div>
      </Router>
    );
  }
}

export default App;
