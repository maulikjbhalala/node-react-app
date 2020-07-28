import React from 'react';
import {Consumer} from './contextFile' 
const grandChildFunc=()=>
{
  return(
      <Consumer>
        {context => (
        <div>
            <p>grand child component</p>
          {context.state.names.map(name => {
            return (
              <p id={name.id}>
                Hi, I am {name.name}, My Id is {name.id} .
              </p>
            )
          })}
        
        </div>
      )}
      
      </Consumer>
        )
};

export default grandChildFunc;