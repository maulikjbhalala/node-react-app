
import React, { Component } from 'react'

 class compo2 extends Component {
     constructor(props) {
         super(props)

     }


    render() {
        if(this.props.data==='myData')
        {
             throw new Error('data is invalid')
        }

        return (
            <div>
                data value is {this.props.data}
            </div>
        )
      
      
    }
}

export default compo2
