import React, { Component } from 'react'

export default class propRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        this.decrementCount=this.decrementCount.bind(this);
        this.incrementCount=this.incrementCount.bind(this);
    }
    incrementCount=()=>
    {
     return   this.setState({
            count:this.state.count+1
        })
    }

    decrementCount=()=>
    {
      return  this.setState({
            count:this.state.count+1
        })
    }
    
    render() {
        return (
            <div>
                {this.props.render({
                    incrementCount:this.incrementCount,
                    decrementCount:this.decrementCount,
                    count:this.state.count
                })}
            </div>
        )
    }
}
