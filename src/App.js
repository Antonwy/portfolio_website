import React, { Component } from 'react';
import LandingPage from './Components/LandingPage'
import './style/App.css';
import './style/bootstrap.min.css'
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <AboutMe />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
