
import React from 'react';

const CounterDisplay = ({ count }) => {
    return (
        <div>
            <p>count is:
                 <h3 style={{ fontSize: '13px' }}>
                    {count}
                </h3></p>
        </div>
    )
};

export default CounterDisplay
