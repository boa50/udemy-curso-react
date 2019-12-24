import React from 'react';

import './Components.css'

const userOutput = (props) => {
    const styleInside = {
        backgroundColor: '#eee'
    }

    return(
        <div className="UserOutput">
            <p>Username: {props.username}</p>
            <p style={styleInside}>P2</p>
        </div>
    )
}

export default userOutput;