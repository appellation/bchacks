import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className="eventDiv box box-back">
        <h3 className="box">Tickets</h3>
        <iframe src="//eventbrite.com/tickets-external?eid=33324768279&ref=etckt" frameborder="0" height="275" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe>
        <div className="eventDivTwo">
          <a className="powered-by-eb" target="_blank" href="http://www.eventbrite.com/">Powered by Eventbrite</a>
        </div>
      </div>
    );
  }
}

export default Register;
