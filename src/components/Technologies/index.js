import React from "react";

function Technologies(props) {

    return props.Technologies.map(technology => {
            return <li className="techUsed">{technology}</li>
    })
}

export default Technologies;
