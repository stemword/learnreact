import React from 'react';
import './UserOutput.css';
const UserOutput = (props) => {
	
return (<div><p className="userout">First paragraph of user {props.username}</p><p className="userout">Second paragraph of user {props.username}</p></div>);
}

export default UserOutput;