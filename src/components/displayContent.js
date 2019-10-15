import React from 'react';
import propTypes from 'prop-types';

const DisplayContent = (props) => {
    return(
        <div>
            <h1>{props.arrayProp}</h1>
            <h2>{props.stringProp}</h2>
            <h3>{props.numberProp}</h3>
            <h4>{props.boolProp}</h4>
        </div>
    );
}

DisplayContent.propTypes={
    arrayProp:propTypes.array,
    stringProp:propTypes.string,
    numberProp:propTypes.number,
    boolProp:propTypes.bool
}

export default DisplayContent;