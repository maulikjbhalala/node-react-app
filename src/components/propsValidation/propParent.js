import React, { Component } from 'react'
import PropValidateComponent from './propsValidation';

export default class propParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             name:''
        };
        this.onChangeInput=this.onChangeInput.bind(this);
        this.onClickHandler=this.onClickHandler.bind(this);
        this.onChangeInputName=this.onChangeInputName.bind(this);
    };

    onChangeInput(e)
    {
        this.setState({
            count:e.target.value,
            // name:'mj'
        })
    }
    onChangeInputName(e)
    {

        this.setState({
            name:e.target.value
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
                    <label>count:</label>
                    <input type='number' name='name' onChange={this.onChangeInput}/> 
                    <br>
                    </br>
                    <label>name:</label>
                    <input type='text' name='name' onChange={this.onChangeInputName}/> 
                    <br>
                    </br>
                    <button type="button" onClick={this.onClickHandler}>click here</button>   
                </form>
                <PropValidateComponent count={this.state.count} name={this.state.name} />
            </div>
        )
    }
}
