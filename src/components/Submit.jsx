import React, { Component } from 'react';
import superagent from 'superagent';


class Submit extends Component {
  constructor(props){
    super(props);
    this.state = {name: '', email: ''};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  render() {
    return (
      <div className="box box-back">
        <p className="App-intro box">
          To get signed up, enter your name, email address, and then register your ticket in the field below!
        </p>
        <form onSubmit={this.submit}>
          <input className="input box" onChange={this.handleNameChange} type="text" name="name" placeholder="Enter Name" />
          <input className="input box" onChange={this.handleEmailChange} type="email" name="email" placeholder="Enter Email" />
          <input className="button box" type="submit" value="submit" />
        </form>
      </div>
    );
  }

  submit(event){
    event.preventDefault();
    superagent.post('https://hooks.zapier.com/hooks/catch/2116348/1umb3d/')
      .set('Content-Type', 'text/plain').send(JSON.stringify(Object.assign(this.state, { timestamp: new Date()})))
      .end(function(err, res){
        console.log(err, res);
      });
  }

  handleNameChange(event){
    this.setState({name: event.target.value});
  }

  handleEmailChange(event){
    this.setState({email: event.target.value});
  }
}

export default Submit;
