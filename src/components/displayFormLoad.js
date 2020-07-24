import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

import LoadingSpinner from './dataLoader'

import 'bootstrap/dist/css/bootstrap.min.css';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
const LoadOnButton =React.lazy(()=>import('./getEmployeesOnButtonLoad'));


//functional components with props handling
const DisplayFormLoad=({buttonClick,emps,loading})=>
{
        return (
            <div className="container">
            <Suspense fallback={<div>
                <p style={{color:'green'}}>
                Wait Button is loading.
                </p>
            </div>}>
                <LoadOnButton buttonClick={buttonClick}/>
            </Suspense>
               
                
        {loading?<LoadingSpinner/>: <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <center style={{ color: 'Blue' }}>Show Employees</center>
                        </h3>
                    </div>
                    <div>
           
           </div>
                    <div className="panel-body">
                        <h4><Link to="/add"><span  class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Employee</Link></h4>
                        <table padding='2' class="table table-stripe">
                            <thead>
                                <tr style={{ color: 'DarkOrchid' }}>
                                    <th>Emp Name</th>
                                    <th>Emp Email</th>
                                    <th><VisibilityIcon style={{ fontSize: 22 }} /> </th>
                                    <th><EditIcon style={{ fontSize: 22 }} /> </th>
                                     <th><DeleteIcon style={{ fontSize: 22 }} /></th>
                                </tr>
                                <p></p>
                            </thead>
                            <tbody>

                                {emps.map(emp =>
                                    <tr style={{ color: 'brown' }} key={emp._id} >
                                        <td>{emp.empName}</td>
                                        <td >{emp.empEmail}</td>
                                       <td><Link to={'/viewById/'+emp._id}>View More</Link></td>
                                       <td><Link to={'/edit/'+emp._id}>Edit</Link></td>
                                       <td><Link to={'/delete/'+emp._id}>Delete</Link></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>}
               
            </div>

        )

};

export default DisplayFormLoad;