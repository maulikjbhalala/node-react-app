import React from 'react';
import Axios from 'axios';
import Select from 'react-select';

class SearchEmployee extends React.Component{


    constructor()
    {

        super();

        this.state={
            emps:[]
        }
    };


    

    componentWillMount()
    {
        this.getEmployee();
    }



    getEmployee()
    {

        Axios.get('http://localhost:5600/emp').then((res)=>
        {
            this.setState({
                emps:res.data
            })
        });
    }


    render()
    {

        return(
            <div className="app">
            <div className="container">
              <Select options={this.state.emps} />
              {this.state.emps.map(person => (
                 <ul key={person.name}>
                     <li>{person.empName}</li>
                     <li>{person.empName}</li>
                     <li>{person.empName}</li>
                     <li>{person.empName}</li>
          </ul>
        ))}
            </div>
          </div>
        )
    }

};


export default  SearchEmployee;
