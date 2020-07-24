

import React from 'react';
import Axios from 'axios';
import ViewLoad from './viewLoad';


class EmpView extends React.Component{


    constructor(props)
    {
        super(props);

        this.state={
            emp:{}
        }
        
    };

    componentWillMount()
    {
        Axios.get('http://localhost:5600/emp/' + this.props.match.params.id)
        .then(res => {
            this.setState({ emp: res.data });
        });
    };



    render()
    {
    //     let {empDept,empId,empEmail,empName,empDesg,_id}=this.state.emp;
       
    //     return(
    //         <div className="container">
    //         <div className="panel panel-default">
    //             <div className="panel-heading">
    //                 <h3 className="panel-title">
    //                     <center style={{ color: 'Blue' }}>{empName}</center>
    //                 </h3>
    //             </div>
    //             <div>
       
    //    </div>
    //             <div className="panel-body">
    //             <h4 ><Link to="/show"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Display Employees</Link></h4>
    //                 <table padding='2' class="table table-stripe">
    //                     <thead>
    //                         <tr style={{ color: 'DarkOrchid' }}>
    //                             <th>Emp Id</th>
    //                             <th>Emp Name</th>
    //                             <th>Emp Email</th>
    //                             <th>Emp Desg</th>
    //                             <th>Emp Dept </th>
    //                         </tr>
    //                         <p></p>
    //                     </thead>
    //                     <tbody>
    //                             <tr style={{ color: 'brown' }} key={_id} >
    //                                 <td>{empId}</td>
    //                                 <td>{empName}</td>
    //                                 <td >{empEmail}</td>
    //                                 <td>{empDesg}</td>
    //                                 <td>{empDept}</td>

    //                                 <td><Link to={'/view?name='+empName}>View More</Link></td>
    //                             </tr>
    //                     </tbody>
    //                 </table>
    //             </div>
    //         </div>
      
       
    //     </div>
    //     );
    return(
         <ViewLoad emp={this.state.emp}/>
     );
    }

};


export default EmpView;
