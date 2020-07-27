import React, { Component } from 'react'


export default class unControlledForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
              name:'',
        }
        this.onButtonHandle=this.onButtonHandle.bind(this);
        this.txtBoxRef=React.createRef();

    }
    
    onButtonHandle()
    {
        this.setState({
            name:this.txtBoxRef.current.value,
        });
        console.log('name is',this.state.name)
    }
  
    render() {
        
        console.log(' data at this stage is',this.state.name)
        return (
            <div>
                <form>
                    <label htmlFor="name">Name:</label>
                    <br>
                    </br>
                    <p>
                        <input type='text' name='name' ref={this.txtBoxRef} placeholder='enter name'/>
                    </p>
                    <br>
                    </br>
                   
                    <button type='button' onClick={this.onButtonHandle} >click here</button>
                    <div>

                    </div>
                </form>
                <div>
                    Name is: {this.state.name}
                </div>
            </div>
        )
    }
}
