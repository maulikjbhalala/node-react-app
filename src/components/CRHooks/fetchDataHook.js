import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import GetUserService from '../services/getUsersService';


export default function FetchDataHook() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const FetchUsers = async () => {
            // GetUserService().then(userRespo => {
            //     setUsers(userRespo.data);

            // });
            const userRespo = await Axios.get('http://localhost:5600/user');
            setUsers(userRespo.data)
        };
        FetchUsers();
    }, []);





    return (
        <div className="animated fadeIn">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> User List
                  </CardHeader>
                        <CardBody>
                            <Table hover bordered striped responsive size="sm">
                                <thead>
                                    <tr>
                                        <th>User Id</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Email</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user =>
                                        <tr style={{ color: 'brown' }} key={user.userId} >
                                            <td >{user.userId}</td>
                                            <td>{user.name}</td>
                                            <td>{user.age}</td>
                                            <td>{user.email}</td>
                                            <td><Link to={'/editHook?id=' + user._id}>Edit User</Link></td>
                                            <td><Link to={'/deleteHook?id=' + user._id}>Delete User</Link></td>
                                            
                                        </tr>
                                    )}
                                </tbody>
                                <td><Link to={'/addHook'}>Add User</Link></td>
                                <td><Link to={'/searchHook'}>Search User</Link></td>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
