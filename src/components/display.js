import React from 'react';

import axios from 'axios';
// import Table from "../Table"
import { Link } from 'react-router-dom';

// import logo from 'download.jpeg';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// import AddIcon from '@material-ui/icons/Add';
// import Loader from './loader';

class Display extends React.Component {


    constructor() {
        super();
        this.state =
        {
            users: [],
            loading: true
        };
    }

    componentWillMount() {
        this.getDataFromAPI();
    };


    getDataFromAPI() {

        axios.get('http://localhost:5600/emp')
            .then(res => {
                this.setState({ users: res.data, loading: false });
            });
    };

  
    

    render() {
    //     if (this.state.loading) return <div id="root">
    //     <div class="divLoader">
    //       <svg class="svgLoader" viewBox="0 0 1024 1024" width="10em" height="10em">
    //         <path fill="lightblue"
    //           d="PATH FOR THE LOADER ICON"
    //         />
    //       </svg>
    //     </div>
    //   </div> ;
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <center style={{ color: 'Blue' }}>Show Employees</center>
                        </h3>
                    </div>
                    <div className="panel-body">
                    {/* <AddIcon/> */}
                        <h4><Link to="/add"><span  class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Go to Add User</Link></h4>
                        <table padding='2' class="table table-stripe">
                            <thead>
                                <tr style={{ color: 'DarkOrchid' }}>
                                    <th>Emp Id</th>
                                    <th>Emp Name</th>
                                    <th>Emp Email</th>
                                    <th>Emp Desg</th>
                                    <th>Emp Dept </th>
                                    <th><EditIcon style={{ fontSize: 22 }} /> </th>
                                     <th><DeleteIcon style={{ fontSize: 22 }} /></th>

                                    {/* <th> <img src={logo} className="App-logo" alt="logo" /> </th> */}
                                    {/* <th>Emp Dept </th> */}
                                </tr>
                                <p></p>
                            </thead>
                            <tbody>

                                { this.state.users.map(user =>
                                    // <li key={user._id}>
                                    // {user._id}
                                    // </li>
                                    <tr style={{ color: 'brown' }} key={user._id} >
                                        <td>{user.empId}</td>
                                        <td>{user.empName}</td>
                                        <td >{user.empEmail}</td>
                                        <td>{user.empDesg}</td>
                                        <td>{user.empDept}</td>
                                       {/* <td><a aria-current="true" class="active" href="/edit/">Display Employees</a></td> */}
                                       <td><Link to={'/edit/'+user._id}>Edit</Link></td>
                                       <td><Link to={'/delete/'+user._id}>Delete</Link></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    };
};


export default Display;