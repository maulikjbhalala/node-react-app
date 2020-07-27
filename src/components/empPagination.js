import React from 'react';
import Axios from 'axios';
import { Button } from 'reactstrap';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class Pagi extends React.Component
{


    constructor(props)
    {
        super(props);
        this.state={
            emps:[],
            limit:5,
            currentPage:0,
            hasNext:"false"
        }
    };

    componentWillMount()
    {

        this.fetchEmployees()
    }

     fetchEmployees()
    {
        Axios.get('http://localhost:5600/emp/page/'+this.props.match.params.limit+'/'+this.props.match.params.pageNo).then((result)=>
        {
          
            this.setState({
                emps:result.data.employees,
                currentPage:this.props.match.params.pageNo,
                hasNext:result.data.hasNext

            })
        });


    };


    nextPage() {
        this.setState({
            currentPage:this.state.currentPage-1
        })
    }
    previousPage() {
            this.setState({
                currentPage:this.state.currentPage+1
            })
    }


    
    render() {
        let {emps}=this.state;
        let {hasNext}=this.state;
        return (

            <div >{hasNext==='true'? <div className="container" >
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

                            { emps.map(emp =>
                                <tr style={{ color: 'brown' }} key={emp._id} >
                                    <td>{emp.empName}</td>
                                    <td >{emp.empEmail}</td>
                                </tr>
                            )}pes.bool	The props should be a boolean.
                            4.	Pro
                        </tbody>
                    </table>
                </div>
            </div>
            <div> 
            <button onClick={this.nextPage}> Previous Page </button>
            <br></br>
            <button onClick={this.previousPage}> Next Page </button> 
        </div>
      
       
        </div>:<center style={{color:'red'}}>No more data available</center>}
        
        
        </div>
           

        )
       
         
    }
};



export default Pagi;
