import React, { useState } from 'react';
import Axios from 'axios';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const GetSearchData = () => {

    const [q, setQuery] = useState('');
    const [users, setUser] = useState([]);
    const [isLoading, setLoading] = useState(false);


    const inputSearchChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value)
    }


    const onClickFetch = (e) => {
        e.preventDefault();
        setLoading(true);
        Axios.get('http://localhost:5600/user?name=' + q).then(respo => {
            if (respo.data.length > 0) {
                setUser(respo.data);
                setLoading(false)
            }
            else {
                setUser([]);
                setLoading(true);
            }
        });
    };




    return (

        < div >
            <form>
                <label>
                    Search By Name:
                </label>
                <br>
                </br>
                <input type='text' name='name' placeholder='enter name to search' onChange={inputSearchChange}></input>
                <br>
                </br>
                <button type='button' onClick={onClickFetch}>Search</button>

            </form>

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
                                        {isLoading ? <div style={{ color: 'red', fontSize: '50px' }}>
                                            <center>
                                                Oops,No data found !
                                                </center>
                                        </div> : users.map(user =>
                                            <tr style={{ color: 'brown' }} key={user.userId} >
                                                <td >{user.userId}</td>
                                                <td>{user.name}</td>
                                                <td>{user.age}</td>
                                                <td>{user.email}</td>

                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div >

    )


};



export default GetSearchData;