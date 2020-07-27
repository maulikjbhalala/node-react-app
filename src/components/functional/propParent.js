import React, { Component } from 'react'
import PropValidateComponent from './propsValidation';

export default class propParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:''
        };
        this.onChangeInput=this.onChangeInput.bind(this);
        this.onClickHandler=this.onClickHandler.bind(this);
    };

    onChangeInput(e)
    {
        this.setState({
            userName:e.target.value
        })
    }

    onClickHandler(e)
    {
        e.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>Name:</label>
                    <input type='text' name='name' onChange={this.onChangeInput}/> 
                    <br>
                    </br>
                    <button type="button" onClick={this.onClickHandler}>click here</button>   
                </form>
                <PropValidateComponent name={this.state.userName}/>
            </div>
        )
    }
}
