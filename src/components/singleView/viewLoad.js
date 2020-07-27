import React from 'react';
import {Link} from 'react-router-dom';


const ViewLoad=({emp})=>
{
    return(
        <div className="container">
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    <center style={{ color: 'Blue' }}><p style={{color:'brown'}}>Employee Name</p> {emp.empName}</center>
                </h3>
            </div>
            <div>
   
   </div>
            <div className="panel-body">
            <h4 ><Link to="/show"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Display Employees</Link></h4>
                <table padding='2' class="table table-stripe">
                    <thead>
                        <tr style={{ color: 'DarkOrchid' }}>
                            <th>Emp Id</th>
                            <th>Emp Name</th>
                            <th>Emp Email</th>
                            <th>Emp Desg</th>
                            <th>Emp Dept </th>
                        </tr>
                        <p></p>
                    </thead>
                    <tbody>
                            <tr style={{ color: 'brown' }} key={emp._id} >
                                <td>{emp.empId}</td>
                                <td>{emp.empName}</td>
                                <td >{emp.empEmail}</td>
                                <td>{emp.empDesg}</td>
                                <td>{emp.empDept}</td>

                                <td><Link to={'/view?name='+emp.empName}>View More</Link></td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
  
   
    </div>
    );

};

export default ViewLoad;