import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import {
//     Container, Col, Form,
//     FormGroup, Label, Input,
//     Button,
//   } from 'reactstrap';

class Add extends Component {
    constructor() {
        super();
        //for local API
        this.state = {
            empName: '',
            empEmail: '',
            empDesg: '',
            empDept: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.dataChange = this.dataChange.bind(this);
        this.msgOnFill = this.msgOnFill.bind(this);
    }


    //This function will store form value in state.
    dataChange = (e) => {
        let state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        //for local API
        let { empName, empDesg, empEmail, empDept } = this.state;
        axios.post('http://localhost:5600/emp', { empName, empEmail, empDept, empDesg })
            .then((result) => {
                console.log(result)
                this.setState({
                    empName: '',
                    empEmail: '',
                    empDesg: '',
                    empDept: '',
                    deptArray:[]
                })
            });

        //render to show - display users screen on submit click.
        this.props.history.push('/show')
    }


    //function to show an alert based on button click.
    msgOnFill() {

        //for local API
        let { empName, empDesg, empEmail, empDept } = this.state;
        if (empName !== '' && empEmail !== '' && empDept !== '' || empDesg == '') {
            alert('Employee added sucessfully.')
        }



    }


    render() {

        //for local API
        let { empName, empDesg, empEmail, empDept } = this.state;
        // let deptArray=[];
        // deptArray=['Development', 'Designing', 'Marketing', 'Suport']
        return (

            //for local API
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

        // return(
        //     <Container className="App">

        //     <h2>Add Employee</h2>
        //     <h4 align='left'><Link to="/show"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Display Employees</Link></h4>
        //     <Form className="form" onSubmit={this.onSubmit}>
        //       <Col>
        //         <FormGroup>
        //           <Label>Name</Label>
        //           <Input
        //             type="text"
        //             name="name"
        //             id="name"
        //             placeholder="Add Your Name"
        //             value={empName}
        //             onChange={this.dataChange}
        //           />
        //         </FormGroup>
        //       </Col>
        //       <Col>
        //         <FormGroup>
        //           <Label>Email</Label>
        //           <Input
        //             type="email"
        //             name="email"
        //             id="exampleEmail"
        //             placeholder="Add Your Email"
        //             value={empEmail}
        //             onChange={this.dataChange}
        //           />
        //         </FormGroup>
        //       </Col>
        //       <Col>
        //         <FormGroup>
        //           <Label>Designation</Label>
        //           <Input
        //             type="text"
        //             name="desg"
        //             id="desg"
        //             placeholder="Add Your Designation"
        //             value={empDesg}
        //             onChange={this.dataChange}
        //           />
        //         </FormGroup>
        //       </Col>
        //       <Col>
        //         <FormGroup>
        //           <Label>Department</Label>
        //           <Input
        //             type="text"
        //             name="dept"
        //             id="dept"
        //             placeholder="Add Your Department"
        //             value={empDept}
        //             onChange={this.dataChange}
        //           />
        //         </FormGroup>
        //       </Col>
              
        //       <Button disabled={!empEmail || !empName || !empDesg || !empDept } onClick={this.msgOnFill}>Add Employee</Button>
        //     </Form>
        //   </Container>
        // )
    }
}


export default Add;