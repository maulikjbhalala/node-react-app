import React from 'react'
import PropTypes from "prop-types";
 const propsValidation = (props) => {
  
    return (
        <div>
            {console.log(props)}
            <p>
            count is   {props.count}
            </p>
          <p>
              name is {props.name}
          </p>
        </div>
    )
};




propsValidation.propTypes = {
    count: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired


    //custom validation in react props by making func.
    // name(props,propName,component)
    // {
    //     if(!propName in props)
    //     {
    //         throw new Error(`missing ${propName}`);
    //     }
    //     if(props[propName].length<5)
    //     {
    //         throw new Error(`length of ${propName} must be greate  than 5 characters`);
    //     }
    // },

    // count(props,propName,component)
    // {
    //     if(!propName in props)
    //     {
    //         throw new Error(`missing ${propName}`);
    //     }
    //     if(props[propName].length===0)
    //     {
    //         throw new Error(`length of ${propName} must be greater than 0`);
    //     }
    // }
  };

  propsValidation.defaultProps={

    name:'maulik j'
  }

export default propsValidation;
