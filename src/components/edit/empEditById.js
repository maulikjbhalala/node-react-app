
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditForm from './empFormLoadById';

const EditByIdComp = (props) => {

    const [employee, setEmployee] = useState({});

    useEffect(() => {

        console.log(window.location.search)
        let id=new URLSearchParams(window.location.search);
        // console.log(id)
        let data=(id.get('id'));
        data=data.trim()
        console.log('data is',data)
        const getUserByid = async () => {
            const result = await axios.get('http://localhost:5600/d/byId?id='+data);
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
        axios.put(`http://localhost:5600/d?id=${data}`, employee)
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




export default EditByIdComp;