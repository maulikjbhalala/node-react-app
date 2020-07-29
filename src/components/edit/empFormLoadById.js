import React from 'react';
import {Link} from 'react-router-dom';

const EditFormLoad=({employee,inputChange,msgOnFill,onSubmit})=>
{

    return(
        <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">
                    Edit  Employee
        </h3>
            </div>
            <div class="panel-body">
            <h4><Link to="/show"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>All Employees</Link></h4>
                <form onSubmit={onSubmit}>
                    <div class="form-group">
                        <label for="empName">Employee Name:</label>
                        <input type="text" class="form-control" name="empName" value={employee.empName} onChange={inputChange} placeholder="Enter Employee Name" />
                    </div>
                    <div class="form-group">
                        <label for="empEmail">Employee Email:</label>
                        <input type="email" class="form-control" name="empEmail" value={employee.empEmail} onChange={inputChange} placeholder="Enter Employee Email Address" />
                    </div>
                    <div class="form-group">
                        <label for="empDesg">Designation:</label>
                        <input type="text" class="form-control" name="empDesg" value={employee.empDesg} onChange={inputChange} placeholder="Enter Designation" />
                    </div>
                    <div class="form-group">
                        <label for="empDept">Department:</label>
                        <input type="text" class="form-control" name="empDept" value={employee.empDept} onChange={inputChange} placeholder="Enter Employee Deprtment" />
                    </div>

                    <button type="submit" disabled={!employee.empName || !employee.empEmail || !employee.empDesg || !employee.empDept} onClick={msgOnFill} class="btn btn-default">Edit Employee</button>
                    
                </form>
            </div>
        </div>
    </div>
    )

};

export default EditFormLoad;