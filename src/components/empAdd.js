import React, { Component } from 'react';
import axios from 'axios';
import AddForm from './addFormLoad';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

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
        axios.get('http://localhost:5600/d/').then((result)=>
        {
            this.setState({
                deptArr:result.data.depts
            })
        })
    };


    onSubmit = (e) => {
        e.preventDefault();

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
        NotificationManager.success('New Employee added sucessfully', 'New Employee');
    }

  

    //function to show an alert based on button click.
    msgOnFill() {

        // let { empName, empDesg, empEmail, empDept } = this.state.employee;
        // if (empName !== '' && empEmail !== '' && empDept !== '' || empDesg == '') {
        //     alert('Employee added sucessfully.')
        // }

        NotificationManager.success('New Employee added sucessfully', 'New Employee');

    }


    render() {
        return (
            <AddForm 
            msgOnFill={this.msgOnFill} 
            dataChange={this.dataChange}
             onSubmit={this.onSubmit}
             emp={this.state.employee} />
        );
       
      
    }
}


export default Add;