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
    {this.props.children(this.state.name)}
        </div>
        )
  }
};

export default ChildPropFunc;