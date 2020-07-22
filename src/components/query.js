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
        let id=new URLSearchParams(window.location.search)
        console.log("url is",id)
        let data=(id.get('name'));
        console.log(data)
        Axios.get(`http://localhost:5600/emp?name=${data}`).then((result)=>
        {
                this.setState({
                    emp:result.data
                });
        });
    };




    render()
    {
        return(

            <tbody>
                <tr>
                    <th>
                      name
                    </th>
                    <th>
                      email
                    </th>
                </tr>

            { this.state.emp.map(emp =>
                <tr style={{ color: 'brown' }} key={emp._id} >
                    <td>{emp.empName}</td>
                    <br></br>
                    <td >{emp.empEmail}</td>
                </tr>
            )}
        </tbody>

        )
    }

};

export default QueryDemo;