import React, { Component } from 'react';
import {Consumer} from './formContext';

export default class formConsumer extends Component {

    render() {
        return (
            <Consumer>
                {context=>(

                    <div>
                        <form>
                            <label>Name:</label>
                            <br></br>
                            <input type='text' onChange={context.onData} placeholder='enter name'/>
                            <br>
                            </br>
                            <lable>Age:</lable>
                            <br></br>
                            <input type='number' onChange={context.onData1} placeholder='enter age'/>
                           
                        </form>
                        <div>
                            name is: {context.state.name}
                            <br>
                            </br>
                            age is: {context.state.age}
                        </div>
                    </div>


                )}
            </Consumer>
           
        )
    }
}
