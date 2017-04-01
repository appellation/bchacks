import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className="eventDiv box box-back">
        <h3 className="box">Tickets</h3>
        <iframe src="//eventbrite.com/tickets-external?eid=33324768279&amp;ref=etckt" frameBorder="0" height="275" width="100%" marginHeight="5" marginWidth="5" scrolling="auto" allowTransparency="true"></iframe>
        <div className="eventDivTwo">
          <a className="powered-by-eb" target="_blank" href="http://www.eventbrite.com/">Powered by Eventbrite</a>
        </div>
      </div>
    );
  }
}

export default Register;
