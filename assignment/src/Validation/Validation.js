import React from 'react';
const validation = (props) => {

    let validationmsg = "Text is enough";
    if(props.inputlength <= 5) {
        validationmsg = "User input short";
    } else if(props.inputlength >= 5) {
        validationmsg = "User input long";
    }
return (<div>
    <p>{validationmsg}</p>
    </div>);
}

export default validation;