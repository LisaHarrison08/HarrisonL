import './App.css';
import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Footer from './components/Footer'
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      < Header />
      < About />
      < Portfolio />
      < Skills />
      < Footer />
    </React.Fragment>
  );
}

export default App;
