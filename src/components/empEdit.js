import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditForm from './editFormLoad';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        };
        this.inputChange=this.inputChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.msgOnFill=this.msgOnFill.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5600/emp/' + this.props.match.params.id)
            .then(res => {
                this.setState({ employee: res.data });
            });
    }

    inputChange = (e) => {
        const state = this.state.employee;
        state[e.target.name] = e.target.value;
        this.setState({ employee: state });
    }

    onSubmit = (e) => {
        e.preventDefault();

        let { empName, empDesg, empEmail, empDept } = this.state.employee;

        axios.put('http://localhost:5600/emp/' + this.props.match.params.id, { empName, empDesg, empEmail, empDept })
            .then((result) => {
                this.props.history.push("/show/")
            });
    }


    msgOnFill() {
        let { empName, empDesg, empEmail, empDept } = this.state.employee;
        if (empName !== '' && empEmail !== '' && empDept !== '' || empDesg == '') {
            alert('Employee Update sucessfully.')
        }
    }

    // msgOnDelete()
    // {

    // }
    // render() {
    //     let { empName, empDesg, empEmail, empDept } = this.state.employee;
    //     return (
    //         <div class="container">
    //             <div class="panel panel-default">
    //                 <div class="panel-heading">
    //                     <h3 class="panel-title">
    //                         Edit  Employee
    //             </h3>
    //                 </div>
    //                 <div class="panel-body">
    //                 <h4><Link to="/show"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>All Employees</Link></h4>
    //                     <form onSubmit={this.onSubmit}>
    //                         <div class="form-group">
    //                             <label for="empName">Employee Name:</label>
    //                             <input type="text" class="form-control" name="empName" value={empName} onChange={this.inputChange} placeholder="Enter Employee Name" />
    //                         </div>
    //                         <div class="form-group">
    //                             <label for="empEmail">Employee Email:</label>
    //                             <input type="email" class="form-control" name="empEmail" value={empEmail} onChange={this.inputChange} placeholder="Enter Employee Email Address" />
    //                         </div>
    //                         <div class="form-group">
    //                             <label for="empDesg">Designation:</label>
    //                             <input type="text" class="form-control" name="empDesg" value={empDesg} onChange={this.inputChange} placeholder="Enter Designation" />
    //                         </div>
    //                         <div class="form-group">
    //                             <label for="empDept">Department:</label>
    //                             <input type="text" class="form-control" name="empDept" value={empDept} onChange={this.inputChange} placeholder="Enter Employee Deprtment" />
    //                         </div>

    //                         <button type="submit" disabled={!empEmail || !empName || !empDesg || !empDept} onClick={this.msgOnFill} class="btn btn-default">Edit Employee</button>
                            
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    render()
    {
        return(
                <EditForm msgOnFill={this.msgOnFill} onSubmit={this.onSubmit} inputChange={this.inputChange} employee={this.state.employee} /> 
        )
        
    }
}

export default Edit;