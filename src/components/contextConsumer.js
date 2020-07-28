import React from 'react';
import {Consumer} from './contextFile' 
import GrandChild from './contextGrandChildConsumer';



const consumerFunc=()=>
{
  return(
      <Consumer>
        {context => (
        <div>
            <p>child component</p>
          {context.state.names.map(name => {
            return (
              <p key={name.id}>
                Hi, I am {name.name} , My Id is {name.id}.
              </p>
            )
          })}

          <form>
              <button type="button" onClick={context.pushData}>Add name</button>
              <button type="button" onClick={context.popData}>Remove name</button>
          </form>
         <GrandChild/>
        </div>
      )}
     

      </Consumer>
        )
};

export default consumerFunc;