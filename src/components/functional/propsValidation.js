import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';

 const propsValidation = (props) => {
    return (
        <div>
                {props.name}
        </div>
    )
};
propsValidation.prototype={
    name:propTypes.string
}

export default propsValidation;
