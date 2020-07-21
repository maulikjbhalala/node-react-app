import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
// import Add from './empAdd';
// import Axios from 'axios';
// import { render } from 'react-dom';



function AddHook()
{

    // let initialEmployeeObj={
    //     empName:'',
    //     empDept:'',
    //     empDesg:'',
    //     empEmail:''
    // };

    // let [emp,setEmp]=useState(initialEmployeeObj);;



    // onInputChange(e)
    // {
    //     setEmp( e.tareget.value)

    // }

    
    // insertData()
    // {
    //     Axios.post('http://localhost:5600/emp',emp).then(res=>
    //     {
    //         setEmp({
    //             empName: res.data.empName,
    //             empDept: res.data.empDept,
    //             empDesg: res.data.empDesg,
    //             empEmail: res.data.empEmail
    //           });
    //     });

    // }


    // onInputChange(event)
    // {
    //     let { name, value } = event.target;
    //     setEmp({ ...emp, [name]: value });
    // }


    let message='this is from functional componene';



    
    // render()
    // {
    //     return(
    //         <div>
    //             <form onSubmit={insertData}>
    //                 <input type='text' name="name" value={emp.empName} onChange={onInputChange}>name</input>
    //                 <input type='email' name="email" value={emp.empEmail} onChange={onInputChange}>email</input>
    //             <button type='submit'>add employee</button>
    //             </form>
    //         </div>
    //     )
    // }

    render()
    {

    return(
        <p>hello</p>
    )
    }


}

export default AddHook