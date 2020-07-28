import React, { Component } from 'react';
import RenderCom from './propRender';

export default class renderComponent extends Component {
    render() {
        return (
            <RenderCom
        render={({ incrementCount, decrementCount, count }) => (
          <div>
            <div>
              <h3>Render Props Counter</h3>
            </div>
            <div>
              <p>{count}</p>
              <button onClick={() => incrementCount()}>Increment</button>
              <button onClick={() => decrementCount()}>Decrement</button>
            </div>
            count is {count}
          </div>
        )}
      />

        )
    }
}
