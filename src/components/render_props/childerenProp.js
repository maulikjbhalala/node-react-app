import React from 'react';
class ChildPropFunc extends React.Component
{

    constructor(props) {
        super(props)
        this.state={
            name:'maulik'
        }
       
      }


  render() {
    return(
        <div>
    {this.props.name(this.state.name)}
        </div>
        )
  }
};

export default ChildPropFunc;