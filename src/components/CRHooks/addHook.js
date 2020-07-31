import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";

const AddDataFunc = () => {
    const [user, setUser] = useState({ name: '', email: '', age: '' })
    const history = useHistory();

    const insertUser = (e) => {
        e.preventDefault();
        const userData = { name: user.name, email: user.email, age: user.age };

        Axios.post('http://localhost:5600/user/', userData)
            .then((result) => {
                setUser({ name: null, email: null, age: null })
                toast.success('User Added Suceesfully', { autoClose: 5000, pauseOnHover: true, closeOnClick: true, draggable: true, position: "top-right" })
                history.push('/showHook');
            });
    }


    const inputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const fetchUsers = () => {
        this.props.history.push("/showHook")

    };

    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={insertUser} noValidate>
                                    <h1>Register</h1>
                                    <InputGroup className="mb-3">

                                        <Input type="text" name="name" placeholder="Enter Your Name" onChange={inputChange} noValidate />
                                    </InputGroup>

                                    <InputGroup className="mb-3">

                                        <Input type="number" placeholder="Enter Your  Age" name="age" onChange={inputChange} noValidate />

                                    </InputGroup>
                                    <InputGroup className="mb-3">

                                        <Input type="text" placeholder="Enter Your Email " name="email" onChange={inputChange} noValidate />

                                    </InputGroup>
                                    <Col xs="12" sm="6">
                                        <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>
                                    </Col>
                                    <Col xs="12" sm="6">
                                        <Button type="submit" className="btn btn-info mb-1" onClick={fetchUsers} block><span>Show Users</span></Button>
                                    </Col>
                                </Form>
                                <ToastContainer />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )

};


export default AddDataFunc;