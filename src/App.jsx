import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container.jsx';
import Nav from './components/Nav.jsx';
import Title from './components/Title.jsx'
import Submit from './components/Submit.jsx';
import Register from './components/Register.jsx'
import About from './components/About.jsx'
import FAQ from './components/FAQ.jsx';
import Sponsors from './components/Sponsors.jsx'

class App extends Component {
  render(){
    return(
      <div className="App content">
        <Nav />
        <div className="box">
          <Title />

          <Submit />

          <Register />

          <About />

          <FAQ />

          <Sponsors />
        </div>
      </div>
    )
  }
}

export default App;
