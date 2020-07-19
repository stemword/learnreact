import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max' , age : 28
      },
      {
        name: 'Manu' , age : 29
      },
      {
        name: 'Maxsta' , age : 26
      }
    ]
  }

  SwitchNameHandler = () => {
    //Dont do this this.state.persons[0].name = "kshitij";
    this.setState({
      persons: [
        {
          name: 'Max1' , age : 28
        },
        {
          name: 'Manu1' , age : 29
        },
        {
          name: 'Maxsta1' , age : 26
        }
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hi I am react app </h1>
        <button onClick={this.SwitchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].name}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies are photgraphy</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
