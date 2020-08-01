import React from 'react';
import './Person.css';
const person = (props) => {
	return <p className="Person" onClick={props.click}>I am a {props.name} and I am {props.age} years old.</p>
}

export default person;