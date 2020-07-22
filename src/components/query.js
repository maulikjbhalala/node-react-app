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
        let data=(id.get('name'));
        console.log(data)
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