// import Axios from 'axios';

// // import 
// import React, { useEffect, useState } from 'react';



// const GetAPICall =()=>
// {
//     const [name,setName]=useState('');
//     const [count,setCount]=useState(0);
//     const [data,setData]=useState([]);

//     const dataChange=(e)=>
//     {
//         setName(e.target.value)
//     };



    




    
// useEffect(() => {  
//     const GetData = async () => {  
//       const result = await axios('http://localhost:5600/d');  
//       setData(result.data.depts);  
//     };  
  
//     GetData();  
//   }, []); 


//     const incrementCount=()=>
//     {
//         setCount(count+1)
//     };


//     return(
//         <div>
//             <h1>input form:</h1>
//             <form >
//                 <p>name:</p>
//                 <input type='text' id='name'  onChange={dataChange}></input>
//                 <button type='button' onClick={incrementCount}>increment</button>
//             </form>
//             <div >
//                 name is <h3 style={{color:'brown'}}>{name}</h3>
//                 count <h3>{count}</h3>
//                 </div>
//                  {/* <div className="panel-body">
//                         <table padding='2' class="table table-stripe">
//                             <thead>
//                                 <tr style={{ color: 'DarkOrchid' }}>
//                                     <th>Emp Name</th>
                                  
//                                 </tr>
//                                 <p></p>
//                             </thead>
//                             <tbody>

//                                 { data.map(emp =>
//                                     <tr style={{ color: 'brown' }} >
//                                         <td>{emp}</td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>
//                     </div> */}
//         </div>
//     )




//      //Define State
//     //  const [name, setName] = useState({firstName: 'name', surname: 'surname'});
//     //  const [title, setTitle] = useState('BIO');
    
//     //  //Call the use effect hook
//     //  useEffect(() => {
//     //    setName({FirstName: 'Shedrack', surname: 'Akintayo'})
//     //    setTitle('mote')
//     //  }, [])//pass in an empty array as a second argument
     
//     //  return(
//     //      <div>
//     //          <h1>Title: {title}</h1>
//     //          <h3>Name: {name.firstName}</h3>
//     //          <h3>Surname: {name.surname}</h3>
//     //      </div>
//     //  );
// };


// export default GetAPICall;
