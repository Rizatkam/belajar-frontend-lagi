import React from 'react';
const Greeting = (props) => {
    return <p onClick={props.clickParagraph}>Hello World! My name
    is {props.name} and I am {props.age} years old.</p>;
    }
export default Greeting;