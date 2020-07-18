import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am react app </h1>
        <Person name="hey" age="25"/>
        <Person name="hey2" age="29">My hobbies are photgraphy</Person>
        <Person name="hey3" age="27"/>
      </div>
    );
  }
}

export default App;
