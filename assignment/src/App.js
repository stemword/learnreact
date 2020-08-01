import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    username: 'Max',
    UserInput:''
  }
  chageNameHandler = (event) => {
    //Dont do this this.state.persons[0].name = "kshitij";
    this.setState({
      username: event.target.value
    });
  }

  inputChangeHandler = (event) => {
    this.setState({
      UserInput : event.target.value
    })
  }

  deleteCharacterHandler = (index) => {
    const text = this.state.UserInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({UserInput:updatedText});
  }
  render() {
  let charList = this.state.UserInput.split().map((ch,index) => {return <Char 
    character={ch} 
    key={index}
    clicked={()=>this.deleteCharacterHandler(index)}
    />; 
  });
    return (
      <div className="App">
        <UserInput changed={this.chageNameHandler} currentname={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <input type="text" onChange={this.inputChangeHandler} value={this.state.UserInput} />
        <p>{this.state.UserInput}</p>
        <Validation inputlength = {this.state.UserInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
