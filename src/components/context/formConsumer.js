// import React, { Component } from 'react';
// import {Consumer} from './formContext';
// import context from 'react-bootstrap/esm/AccordionContext';


// export default class formConsumer extends Component {
//     constructor(props) {
//         super(props)
//         console.log(props.name)
//             this.state = {
//                  name:props.name
//             }
//     }
    
//     render() {
//         return (
//             <Consumer>
//                 {context=>(

//                     <div>
//                         <form>
//                             <label>Name:</label>
//                             <br></br>
//                             <input type='text' onChange={context.onData} placeholder='enter name'/>
//                             <br>
//                             </br>
//                             <lable>Age:</lable>
//                             <br></br>
//                             <input type='number' onChange={context.onData1} placeholder='enter age'/>
                           
//                         </form>
//                         <div>
//                             name is: {context.state.name}
//                             <br>
//                             </br>
//                             age is: {context.state.age}
//                         </div>
//                     </div>


//                 )}
//             </Consumer>
           
//         )
//     }
// }


import React, { useContext, useEffect } from 'react';
import FormContext from './formContext';

const FormConsumer =()=>
{
    const user=useContext(FormContext);
    const [myName, setName] = React.useState('');
    const MyFunc=()=>
    {
        setName(user.state.name)
    };

    return(
     
        <div>
            <form>
                <label>
                    Name:
                </label>
                <br>
                </br>
                <input type='text' name='name' placeholder='enter name' onChange={user.onData}/>
                <br>
                </br>
                <label>
                    Age:
                </label>
                <br>
                </br>
                <input type='number' name='age' placeholder='enter age' onChange={user.onData1}/>
            </form>
            <p>
                Name is: {user.state.name}
            </p>
            <p>
                Age is: {user.state.age}
            </p>
            <p >
            state name is :<p style={{color:'brown'}}>{myName}</p>
            </p>
            <br>
            </br>
                <button type='button' onClick={MyFunc}>update state name</button>
           
        </div>
    )
};


export default FormConsumer;