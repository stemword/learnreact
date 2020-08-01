import React from 'react';
import './Char.css';
const Char = (props) => {
	
return (<div>
    <p className="userout" onClick={props.clicked}>{props.character}</p>
    </div>);
}

export default Char;