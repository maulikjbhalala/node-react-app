import React from 'react'

import RefCom from './refComponent2';


class RefComponent extends React.Component {
  
    constructor(props) {
        super(props);
        this.state={
            counter:0
        }
    
        this.firstRef=React.createRef();// one way to create a ref
        //second way to create a ref in react is to use callback ref
        this.inputRef=null;
        this.cbInRef=(Element)=>
        {
            this.inputRef=Element;
        }
        this.myHandler=this.myHandler.bind(this);
    }
    
     myHandler(e)
    {
        let {counter}=this.state;
        e.preventDefault();
        // this.firstRef.current.focus()
        
        
        
        if(this.inputRef)
        {
            this.inputRef.focus();
        }
        this.setState({
            counter:counter+1
        });

    }
  
  render()
  {
    return (
        <div>
            <form>
                {/*  passing ref using props to child component */}
              {/* <RefCom myRef={this.cbInRef}/> */}


              {/* passing ref  to child component as forward ref */}
              <RefCom  ref={this.cbInRef}  data={this.state.counter}/>
              {/* <RefCom  myRef={this.firstRef} data={this.state.counter}/> */}
            <button type='button'  onClick={this.myHandler}>Focus</button>
            </form>
            <h4>
                counter is {this.state.counter}
            </h4>
        </div>
    )
  }
    
};

export default RefComponent;


//ref using functional component
// import React from 'react';

// const RefComponent=()=>
// {
//    const myRef = React.useRef(null);
//    const myHandler=(e)=>
//    {
//     e.preventDefault();
//     myRef.current.focus();
//    }

//    return(
//        <div>
//            <form>
//                <label>
//                    Name:
//                </label>
//                <br>
//                </br>
//              <input type='text' ref={myRef} name='name' placeholder='enter name'/>  
//              <br>
//              </br>
//              <button type='button' style={{color:'brown'}} onClick={myHandler}>Focus</button>
//            </form>
//        </div>
//    )

// };


// export default RefComponent;