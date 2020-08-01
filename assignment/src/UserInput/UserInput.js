import React from 'react';
import './UserInput.css';
const UserInput = (props) => {
	const style = {
		backgroundColor : 'white',
		font:"inherit",
		border:'1px solid blue',
		padding:'8px',
		cursor:'pointer'
	  };
	return <input style={style} type="text" name="username" onChange={props.changed} value={props.currentname}/>;
};

export default UserInput;