import React from 'react';
import Axios from 'axios';
    class FilterClass extends React.Component{
        constructor()
        {
            super();
            this.state=
            {
                emps:[],
                q:''
            };
            this.filterFunc=this.filterFunc.bind(this);
            this.dataChange=this.dataChange.bind(this);
            this.nullInput=this.nullInput.bind(this);
        };


        filterFunc()
        {
            let emps = this.state.emps;
            let q = this.state.q;
        
            emps = emps.filter(function(emp) {
              return (emp.empName.toLowerCase().indexOf(q) != -1) || (emp.empEmail.toLowerCase().indexOf(q) != -1);
            });
            this.setState({ emps: emps });
        };

        dataChange(e)
        {
            let q = e.target.value.toLowerCase();
            this.setState({ q }, () => this.filterFunc());
        }

        componentWillMount()
        {
            Axios.get('http://localhost:5600/emp/').then((result)=>
            {
                this.setState(
                    {
                        emps:result.data
                    }
                )

            }).catch((Error)=>
            {
                console.log(Error)
            });
        }



        nullInput(e)
        {
            console.log(e.target.value)
            if(e.target.value==='' ||e.target.value.length===0 ||e.target.value===null || e.target.value===undefined)
            {
                this.setState({
                    q:'',
                    emps:this.state.emps
                })
    
            }
                window.location.reload(true);
        }


        render() {
            //  this.state.emps.map(emp => {
            //     return <table padding='2' class="table table-stripe">
            //     <thead>
            //         <tr style={{ color: 'DarkOrchid' }}>
            //             <th>Emp Id</th>
            //             <th>Emp Name</th>
            //             <th>Emp Email</th>
            //             <th>Emp Desg</th>
            //             <th>Emp Dept </th>
            //         </tr>
            //         <p></p>
            //     </thead>
            //     <tbody>

            //             <tr style={{ color: 'brown' }} key={emp._id} >
            //                 <td>{emp.empId}</td>
            //                 <td>{emp.empName}</td>
            //                 <td >{emp.empEmail}</td>
            //                 <td>{emp.empDesg}</td>
            //                 <td>{emp.empDept}</td>
            //             </tr>
            //     </tbody>
            // </table>
            //   });

          
              return (
                <div className="container">
                    <div>
                            <div class="form-group">
                                <input type="text" class="form-control" name="empName" value={this.state.q} onChange={this.dataChange} placeholder="Enter Employee Name to search here" />
                            </div>
                                <button type="submit"  onClick={this.nullInput} class="btn btn-default">Reset</button>
                                
                                {/* <button type="submit" style={{marginBlock:'20 px',alignSelf:'right'}} onClick={this.nullInput} class="btn btn-default">Search</button> */}
                            </div>


                    <div className="panel panel-default">
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
    
                                    { this.state.emps.map(emp =>
                                        <tr style={{ color: 'brown' }} key={emp._id} >
                                            <td>{emp.empId}</td>
                                            <td>{emp.empName}</td>
                                            <td >{emp.empEmail}</td>
                                            <td>{emp.empDesg}</td>
                                            <td>{emp.empDept}</td>
                                           {/* <td><Link to={'/edit/'+emp._id}>Edit</Link></td> */}
                                           {/* <td><Link to={'/delete/'+emp._id}>Delete</Link></td> */}
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



    export default FilterClass;