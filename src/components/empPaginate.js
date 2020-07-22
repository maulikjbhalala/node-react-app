import React from 'react';
import Axios from 'axios';


class PaginationEmployee extends React.Component{

    
    constructor() {
        super();
        this.state =
        {
            emps: [],
            loading: true
        };
    }

    componentWillMount() {
        this.getDataFromAPI();
    };


    getDataFromAPI() {

        Axios.get('http://localhost:5600/emp')
            .then(res => {
                console.log('result data',res)
                this.setState({ emps: res.data, loading: false });
            });
    };

  

    render()
    {
        return(
            <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <center style={{ color: 'Blue' }}>Show Employees</center>
                    </h3>
                </div>
                <div>
       
       </div>
                <div className="panel-body">
                    <table padding='2' class="table table-stripe">
                        <thead>
                            <tr style={{ color: 'DarkOrchid' }}>
                                <th>Emp Name</th>
                                <th>Emp Email</th>
                            </tr>
                            <p></p>
                        </thead>
                        <tbody>

                            { this.state.emps.map(emp =>
                                <tr style={{ color: 'brown' }} key={emp._id} >
                                    <td>{emp.empName}</td>
                                    <td >{emp.empEmail}</td>
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




export default PaginationEmployee;