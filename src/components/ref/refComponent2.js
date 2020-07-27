//accessing ref using props
// import React from 'react';

// class MyRefComponent extends React.Component
// {
//     constructor(props) {
//         super(props)
//     }

//     render()
//     {
//         return(
//             <div>
               
//                  <form>
//             <label htmlFor="name">Enter Name:</label>
//             <br></br>
//         <input type="text" name="name" ref={this.props.myRef} placeholder="enter name"/>
//         <br>
//         </br>
//         </form>
//             </div>
           
//         )
//     }

// };

// export default MyRefComponent;



//forward ref from parent component usinf react's forwardRef method
import React from 'react';
import Ref3Compo from './refComponent3';

const MyRefComponent =React.forwardRef((props,ref)=>
{
    return(
        <div>
           <form>
             <label htmlFor="name">Enter Name:</label>
             <br></br>
            <input type="text" name="name" value={props.data} ref={ref} placeholder="enter name"/>
             <br>
             </br>
         </form>
         <Ref3Compo/>
             </div>
    )
});

export default MyRefComponent;