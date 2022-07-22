import React from 'react';

function BreakInterval (props) {
    return(
        <div>
            <button>Down</button>
            <p>{props.breakInterval}</p>
            <button>Up</button>
        </div>
    )
}
export default BreakInterval;