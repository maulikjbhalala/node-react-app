import React, { Component, Fragment } from 'react'

export default class fragmentChild extends Component {
    constructor(props) {
        super(props)
        this.state = {
             data:[
                 {
                     name:'maulik',
                     id:1
                 },
                 {
                     name:'mj',
                     id:2
                 }
             ]
        }
    }
    
    render() {
        return (
            <tr>
        {this.state.data.map(item => (
        <React.Fragment key={item.id}>
            <p> <td>name is: {item.name}</td></p>
         
        </React.Fragment>
      ))}
    </tr>  

        )
    }
}
