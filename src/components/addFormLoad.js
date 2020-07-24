import React from 'react';
import {Link} from 'react-router-dom';

class AddForm extends React.Component{


    constructor(props)
    {
        super(props);
    }

    render() {
   
        // let { empName } = this.props.empName;
        // let {  empDesg,} = this.props.empDesg;
        // let {  empEmail } = this.props.empEmail;
        // let {  empDept } = this.props.empDept;
    
        let {empDept,empName,empDept,empDesg}=this.props.emp;
        // let opts = this.state.deptArr.map(function (dept) {
        //     return dept.name;
    // });
        return (

            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Add New Employee
                    </h3>
                    </div>
                    <div class="panel-body">
                        <h4 ><Link to="/show"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Display Employees</Link></h4>


                        <form onSubmit={this.props.onSubmit}>
                            <div class="form-group">
                                <label for="empName">Employee Name:</label>
                                <input type="text" class="form-control" name="empName" value={empName} onChange={this.props.dataChange} placeholder="Enter Employee Name" />
                            </div>
                            <div class="form-group">
                                <label for="empEmail">Employee Email:</label>
                                <input type="email" class="form-control" name="empEmail" value={empEmail} onChange={this.props.dataChange} placeholder="Enter Employee Email Address" />
                            </div>
                            <div class="form-group">
                                <label for="empDesg">Designation:</label>
                                <input type="text" class="form-control" name="empDesg" value={empDesg} onChange={this.props.dataChange} placeholder="Enter Designation" />
                            </div>
                            <div class="form-group">
                            <label for="empDept">Department:</label>
                            {/* <select class="form-control"  value={empDept}>
                                 { deptArray.map((dept) => <option key={dept}  onChange={this.dataChange}>{dept}</option>)} 
                            </select> */}
                               

                                <input type="text" class="form-control" name="empDept" value={empDept} onChange={this.props.dataChange} placeholder="Enter Employee Deprtment" />
            
                            </div>


            
                            <button type="submit" disabled={!empEmail || !empName || !empDesg || !empDept } onClick={this.props.msgOnFill} class="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );

      
    }


};


export default AddForm;