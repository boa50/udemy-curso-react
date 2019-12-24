import React from 'react';

import './Components.css';

const userInput = (props) => {
    return(
        <div className="UserInput">
            <input onChange={props.handler} value={props.username} />
        </div>
    )
}

export default userInput;