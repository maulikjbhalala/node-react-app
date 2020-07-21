import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import Axios from 'axios';

 function MyDemo()
{
    let [a,setA]=useState(0);

    let [b,setB]=useState(0);
    
    let [emps,setArr]=useState([]);

    useEffect(()=>
    {
        Axios.get('http://localhost:5600/emp/').then((data)=>
        {
            setA(10);
            setB(15);
            setArr(data.data)
        });
    });


    render()
    {
       return (
        <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <center style={{ color: 'Blue' }}>Show Employees</center>
                    </h3>
                </div>
                <div>
       </div>
                <div className="panel-body">
                    <table padding='2' class="table table-stripe">
                        <thead>
                            <tr style={{ color: 'DarkOrchid' }}>
                            <th>Employee Name</th>
                            <th>Employee Email</th>
                            </tr>
                            <p></p>
                        </thead>
                        <tbody>

                            { emps.map(emp =>
                                <tr style={{ color: 'brown' }} key={emp._id} >
                                    <td>{emp.empName}</td>
                                    <td >{emp.empEmail}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
      
       
        </div>

    )
    }

};

export default MyDemo;