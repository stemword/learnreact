import React from 'react';
import './Person.css';
import styled from 'styled-components';
//import Radium from 'radium';

const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eeeeee;
  padding: 16px;
  text-align: center;



@media (min-width: 500px) {
		width: 450px;
}`;	
const person = (props) => {
	return <StyleDiv>
	<p onClick={props.click}>I am a {props.name} and I am {props.age} years old.</p></StyleDiv>
}

export default person;