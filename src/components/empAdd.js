import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Axios from 'axios';
import AddForm from 'axios';

// import {
//     Container, Col, Form,
//     FormGroup, Label, Input,
//     Button,
//   } from 'reactstrap';

class Add extends Component {
    constructor() {
        super();
        this.state = {
            deptArr:[],
            employee:{}
            // selectedData:''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.dataChange = this.dataChange.bind(this);
        this.msgOnFill = this.msgOnFill.bind(this);
    }


    //This function will store form value in state.
    dataChange = (e) => {
        let state = this.state.employee;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

   

    componentDidMount()
    {
        Axios.get('http://localhost:5600/d/').then((result)=>
        {
            this.setState({
                deptArr:result.data.depts
            })
        })
    };


    onSubmit = (e) => {
        e.preventDefault();

        //for local API
        let { empName, empDesg, empEmail, empDept } = this.state.employee;
        axios.post('http://localhost:5600/emp', { empName, empEmail, empDept, empDesg })
            .then((result) => {
                console.log(result)
                this.setState({
                    employee: {},
                    deptArray:[]
                })
            });

        //render to show - display users screen on submit click.
        this.props.history.push('/show')
    }

  

    //function to show an alert based on button click.
    msgOnFill() {

        //for local API
        let { empName, empDesg, empEmail, empDept } = this.state.employee;
        if (empName !== '' && empEmail !== '' && empDept !== '' || empDesg == '') {
            alert('Employee added sucessfully.')
        }

    }


    render() {
   
        let { empName, empDesg, empEmail, empDept } = this.state.employee;
    
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


                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="empName">Employee Name:</label>
                                <input type="text" class="form-control" name="empName" value={empName} onChange={this.dataChange} placeholder="Enter Employee Name" />
                            </div>
                            <div class="form-group">
                                <label for="empEmail">Employee Email:</label>
                                <input type="email" class="form-control" name="empEmail" value={empEmail} onChange={this.dataChange} placeholder="Enter Employee Email Address" />
                            </div>
                            <div class="form-group">
                                <label for="empDesg">Designation:</label>
                                <input type="text" class="form-control" name="empDesg" value={empDesg} onChange={this.dataChange} placeholder="Enter Designation" />
                            </div>
                            <div class="form-group">
                            <label for="empDept">Department:</label>
                            {/* <select class="form-control"  value={empDept}>
                                 { deptArray.map((dept) => <option key={dept}  onChange={this.dataChange}>{dept}</option>)} 
                            </select> */}
                               

                                <input type="text" class="form-control" name="empDept" value={empDept} onChange={this.dataChange} placeholder="Enter Employee Deprtment" />
            
                            </div>


            
                            <button type="submit" disabled={!empEmail || !empName || !empDesg || !empDept } onClick={this.msgOnFill} class="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
        // let myObj={};
        // myObj.empName=this.state.empName;
        // myObj.empDept=this.state.empDept;
        // myObj.empDesg=this.state.empDesg;
        // myObj.empEmail=this.state.empEmail;

        // console.log(myObj)

        // return(
        //     <AddForm msgOnFill={this.msgOnFill} dataChange={this.dataChange} onSubmit={this.onSubmit}  emp={this.state.employee} />
        // )
      
    }
}


export default Add;