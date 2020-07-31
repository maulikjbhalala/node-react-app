import React from 'react'
import CounterComponent from './counterComponent';
import DisplayCount from './displayCount';

const parentPropFunc = () => {

    return (

        // <CounterComponent render={(name, dataChange) =>
        //     <DisplayCount name={name} dataChange={dataChange} />
        // } />

        //now pass as children
        <CounterComponent>
            {(name, dataChange) =>
                <DisplayCount name={name} dataChange={dataChange} />}
        </CounterComponent>
    )


};

export default parentPropFunc;