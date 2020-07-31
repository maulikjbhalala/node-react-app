import React, { Component } from 'react'

export default class displayCount extends Component {
    render() {
        return (
            <div>
                <p>
                    <form>
                        <input  type='text' name="name" onChange={this.props.dataChange}></input>
                    </form>
                  <p style={{color:'brown'}}>
                  Name is {this.props.name}
                      </p> 
                </p>
            </div>
        )
    }
}
