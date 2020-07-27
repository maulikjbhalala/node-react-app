import React, { Component } from 'react'


export default class unControlledForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
              name:'',
        }
        this.onButtonHandle=this.onButtonHandle.bind(this);
        this.txtBoxRef=React.createRef();
        this.fileREf=React.createRef()

    }
    
    onButtonHandle()
    {
        // this.setState({
        //     name:this.txtBoxRef.current.value,
        // });
        alert('file name is'+ ' '+this.fileREf.current.files[0].name)
    }
  
    render() {
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


                    <p>
                        <input type='file' name='file' ref={this.fileREf} placeholder='upload file'/>
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
