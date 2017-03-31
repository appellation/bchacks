import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container.jsx';
import Nav from './components/Nav.jsx';
import Submit from './components/Submit.jsx';

class App extends Component {
  render(){
    return(
      <div className="App content">
        <div className="box">
          <div className="box">
            <h1>BCHacks</h1>
            <h2>May 27th-28th, 2017</h2>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <p className="App-intro">
            To get signed up, enter your name and email address.
          </p>

          <Submit />
          <br />
          <div className="eventDiv box">
            <iframe src="//eventbrite.com/tickets-external?eid=33324768279&ref=etckt" frameborder="0" height="275" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe>
            <div className="eventDivTwo">
              <a className="powered-by-eb" target="_blank" href="http://www.eventbrite.com/">Powered by Eventbrite</a>
            </div>
          </div>
        </div>
        <div className="box">
          <h1>About</h1>
          <hr />
        </div>
        <div className="box">
        <h1>About</h1>
          <hr />
          </div>
        <div className="box">
        <h1>About</h1>
          <hr />
          </div>
        <div className="box">
          <h1>About</h1>
          <hr />
        </div>
      </div>
    )
  }
}

export default App;
