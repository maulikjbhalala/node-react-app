
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import EditForm from './editFormLoad';

const Edit = (props) => {

    const [employee, setEmployee] = useState({});

    useEffect(() => {
        const getUserByid = async () => {
            const result = await axios.get('http://localhost:5600/emp/' + props.match.params.id);
            setEmployee(result.data)

        };
        getUserByid();

    }, []);


    const inputChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value })
    }


    const onSubmit = (e) => {
        e.preventDefault();
        setEmployee(employee)
        axios.put('http://localhost:5600/emp/' + props.match.params.id, employee)
            .then((result) => {
                props.history.push("/show/")
            });
    }



    const msgOnFill = () => {

        if (employee.empName !== '' && employee.empEmail !== '' && employee.empDept !== '' || employee.empDesg == '') {
            alert('Employee Update sucessfully.')
        }
    }

    return (<div>
        <EditForm msgOnFill={msgOnFill} onSubmit={onSubmit} inputChange={inputChange} employee={employee} />
    </div>)

};




export default Edit;