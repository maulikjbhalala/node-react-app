import React, { Component } from 'react';
import Com1 from './hoc1'
import Com2 from './hoc2';

const HOCCom=  (ComposedComponent,New2component) =>class extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
                data:"maulik",
                id:6,
                age:21
        }
    }
    componentWillMount()
    {
        this.setState({
            data:'mj '
        })
    }
    
   
    render()
    {

        return (
            <div>
                <ComposedComponent 
                    {...this.props}
                 age={this.state.age}/>
                
                 <Com2
                  {...this.props} id={this.state.id} stateData={this.state}
                  />
            </div>
        )

    }
        
};

export default HOCCom(Com1,Com2);