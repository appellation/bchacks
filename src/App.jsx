import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container.jsx';
import Nav from './components/Nav.jsx';
import Submit from './components/Submit.jsx';
import FAQ from './components/FAQ.jsx';

class App extends Component {
  render(){
    return(
      <div className="App content">
        <Nav />
        <div className="box">
          {/*<Title />*/}
          <div className="box">
            <h1>BCHacks</h1>
            <h2>May 27th-28th, 2017</h2>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          {/*<Intro />*/}

          <div className="box">
            <Submit />
          </div>

          <br />

          {/*<Register />*/}
          <div className="eventDiv box">
            <iframe src="//eventbrite.com/tickets-external?eid=33324768279&ref=etckt" frameborder="0" height="275" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe>
            <div className="eventDivTwo">
              <a className="powered-by-eb" target="_blank" href="http://www.eventbrite.com/">Powered by Eventbrite</a>
            </div>
          </div>

          {/*<About />*/}
          <div className="box">
            <h3>About</h3>
            <hr />
          </div>

          <FAQ />
          {/*<div className="box">
            <h3>FAQ</h3>
            <div className="box">
              <h4>What is a hackathon?</h4>
              <hr />
              <p>A hackathon is best described as an “invention marathon”. Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science.</p>
            </div>

            <div className="box">
              <h4>What if I don't know how to code?</h4>
              <hr />
              <p>Not a problem! The entire Major League Hacking team knew very little when they each attended their very first hackathon. It’s entirely irrelevant what your experience is going into a hackathon, it’s more about your interest in technology. Every MLH Member Event is passionate about making their hackathons very welcoming and beginner-friendly. If you’re wanting to learn how to code outside of a hackathon, there’s a fantastic blog post that you should read. After, you should check out the following: Treehouse, Codecademy and the Major League Hacking blog to get started.</p>
            </div>

            <div className="box">
              <h4>Will I annoy people if I ask them questions?</h4>
              <hr />
              <p>Not at all! This is a common misconception about hackathons and in actual fact, it’s the complete opposite. The environment at these events are designed specifically to encourage everyone to have fun and help each other. If you’re ever stuck on anything, go find a volunteer who might able to help and if not, they will almost certainly know who can.</p>
            </div>

            <div className="box">
              <h4>What if I don't know anybody there?</h4>
              <hr />
              <p>Not to worry! You’ll meet people when you get there. Everybody’s very friendly. A lot of people go to hackathons without teams. So it’s perfectly normal to go around to people, tell them you’re looking for a team, and ask if you can help out. Hackathons will often run team-matching sessions at the start to help you meet people. And you can often join a facebook group for the event beforehand and post there to find potential teammates. Protip: Invite your friends to come to the hackathon too! That way you’re guaranteed to have at least one familiar face.</p>
            </div>

            <div className="box">
              <h4>What if I don't have an idea?</h4>
              <hr />
              <p>That’s normal. Most people don’t have an idea before they get to the event. But once you start talking to other people, you might come up with something. You can also work with somebody else on their idea if you like it. And there will be prizes at the event which might help give you some ideas. Don’t worry about it, you’ll find something to work on.</p>
            </div>

            <div className="box">
              <h4>Will there be food?</h4>
              <hr />
              <p>Absolutely! Your meals for the weekend will be free and there’ll be plenty of snacks and drinks to keep you energized.</p>
            </div>

            <div className="box">
              <h4>What if I don't want to present my hack?</h4>
              <hr />
              <p>You might think your project isn’t impressive or it might not be finished so you don’t want to present it. You should present it anyway! Honestly, hackathons isn’t about being the best or being competitive. It’s all about having fun, making friends and learning how to become better at things you care about. Presenting your hack gives you a chance to be proud of what you’ve done, and you should be proud.</p>
            </div>

            <div className="box">
              <h4>Great! How can I get involved?</h4>
              <hr />
              <p>If spots are still remaining, head back up top and submit your email and register your ticket to reserve your spot!</p>
            </div>
          </div>*/}

          {/*<Sponsors />*/}
          <div className="box">
            <h3>Sponsors</h3>
            <hr />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
