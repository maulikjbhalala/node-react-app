
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Edit = (props) => {

    const [user, setUser] = useState({});
    let id = new URLSearchParams(window.location.search);
    let data = (id.get('id'));
    data = data.trim()

    useEffect(() => {

        const getUserByid = async () => {
            const result = await axios.get('http://localhost:5600/user/byId?id=' + data);
            setUser(result.data)
        };
        getUserByid();
    }, []);


    const inputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }


    const onSubmit = (e) => {
        e.preventDefault();
        setUser(user)
        axios.put('http://localhost:5600/user?id=' + data, user)
            .then((result) => {
                toast.success('User updated succesfully', { autoClose: 5000, pauseOnHover: true, closeOnClick: true, draggable: true, position: "top-right" })
            });
    }

    const redirectToUsers = (e) => {
        e.preventDefault();
        props.history.push("/showHook/")
    };



    return (<div>
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={onSubmit}>
                                    <h1>Edit User</h1>
                                    <InputGroup className="mb-3">

                                        <Input type="text" name="name" placeholder="Enter Your Name" value={user.name} required onChange={inputChange} />
                                    </InputGroup>

                                    <InputGroup className="mb-3">

                                        <Input type="number" placeholder="Enter Your  Age" name="age" value={user.age} required onChange={inputChange} />
                                    </InputGroup>
                                    <InputGroup className="mb-3">

                                        <Input type="text" placeholder="Enter Your Email " name="email" value={user.email} required onChange={inputChange} />
                                    </InputGroup>
                                    <Col xs="12" sm="6">
                                        <Button type="submit" className="btn btn-info mb-1" block><span>Edit</span></Button>
                                    </Col>
                                    {/* <td><Link to={'/showHook'}>Show Users</Link></td> */}
                                    <Col xs="12" sm="6">
                                        <Button type="submit" className="btn btn-info mb-1" block onClick={redirectToUsers}><span>Back To Users</span></Button>
                                    </Col>
                                </Form>
                                <ToastContainer />
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </Container>


        </div>
    </div>)

};




export default Edit;