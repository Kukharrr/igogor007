import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 

    }
  }

  render() {
    return (
      <AppBar
        title="Title"
      />
    );
  }
}

export default App;
