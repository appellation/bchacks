import React, { Component } from 'react';
import logo from './logo.svg';

import Container from './components/Container.jsx';
import Nav from './components/Nav.jsx';
import Submit from './components/Submit.jsx';

class App extends Component {
  render(){
    return(
      <div>
        <Container>
          <Nav/>
        </Container>
        <Submit />
      </div>
    )
  }
}

export default App;
