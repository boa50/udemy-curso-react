import React from 'react';

const ValidationComponent = (props) => {
    const minimumLength = 5;
    const textLength = props.textLength;

    if (textLength < minimumLength) {
        return <p>Text too short</p>;    
    }

    return <p>Text long enouth</p>;

}

export default ValidationComponent;