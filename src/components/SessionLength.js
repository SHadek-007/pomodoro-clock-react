import React from "react";

function SessionLength(props) {
    return(
        <div>
            <button>Down</button>
            <p>{props.sessionLength}</p>
            <button>Up</button>
        </div>
    )
}
export default SessionLength;