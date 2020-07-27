import React from 'react';

// import QueryString from 'querystring'
// import { URLSearchParams } from 'url';
import Axios from 'axios';

class QueryDemo extends React.Component{

    constructor()
    {
        super();
        this.state={
            emp:[]
        }
    };

    componentWillMount()
    {
        let id=new URLSearchParams(window.location.search);
        let data=(id.get('name'));
        data=data.trim()
        if(id!==null || id!==undefined || data!==null || data!==undefined) 
        {
            Axios.get(`http://localhost:5600/emp?name=${data}`).then((result)=>
            {
                    this.setState({
                        emp:result.data
                    });
            });
        }
        else if(id===null || id===undefined || id.length===0 ||data==='' || data===undefined ||data===null ||data.length===0)
        {
            Axios.get('http://localhost:5600/emp').then((result)=>
            {
                    this.setState({
                        emp:result.data
                    });
            });
        }
      
    };



    render()
    {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                       
                    </div>
                    <div>
           
           </div>
                    <div className="panel-body">
                        <table padding='2' class="table table-stripe">
                            <thead>
                                <tr style={{ color: 'DarkOrchid' }}>
                                <th>Emp Id</th>
                                <th>Emp Name</th>
                                <th>Emp Email</th>
                                <th>Emp Desg</th>
                                <th>Emp Dept </th>
                                </tr>
                                <p></p>
                            </thead>
                            <tbody>
                                { this.state.emp.map(empObj =>
                                    <tr style={{ color: 'brown' }} key={empObj._id} >
                                        <td >{empObj.empId}</td>
                                        <td >{empObj.empName}</td>
                                        <td>{empObj.empEmail}</td>
                                        <td >{empObj.empDesg}</td>
                                        <td>{empObj.empDept}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
           
            </div>

        )
    }

};

export default QueryDemo;