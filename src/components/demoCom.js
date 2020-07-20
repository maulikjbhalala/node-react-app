
import React from 'react';



class DemoComponent extends React.Component {
    render() {
        let a = 2;
        let b = 4;
        return (
            <p>  <div> <center>Hello from demo component.</center></div>
                <center style={{ color: 'pink' }}>{alert('sum of a and b is '+ (a+b))}</center>
            </p>
        );

    }

};



export default DemoComponent;