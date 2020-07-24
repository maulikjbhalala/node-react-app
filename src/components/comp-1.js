import React from 'react';
import  './comp-1.css';
import Axios from 'axios';


    class TodoApp extends React.Component {
      constructor() {
        super();
        this.state = {
          emps: [],
          currentPage: 1,
          dataPerPage: 5
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }


      componentWillMount()
      {
        Axios.get('http://localhost:5600/emp/').then((result)=>
              
        {
            this.setState(
                {
                    emps: result.data
                }
            )
        })

      }

      render() {
        const { emps, currentPage, dataPerPage } = this.state;

        const indexOfLastTodo = currentPage * dataPerPage;
        const indexOfFirstTodo = indexOfLastTodo - dataPerPage;
        const currentTodos = emps.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((emp, index) => {
            
            
          return   <div className="container">
        
    <div className="panel panel-default">
            
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
                            <tr style={{ color: 'brown' }} key={emp._id} >
                                <td>{emp.empName}</td>
                                <td >{emp.empEmail}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
       
    </div>
         
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(emps.length / dataPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <button
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
              <br></br>
            </button>
          );
        });

        return (
          <div>
            <ul>
              {renderTodos}
            </ul>
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>
        );
      }
    }


    // ReactDOM.render(
    //   <TodoApp />,
    //   document.getElementById('app')
    // );

    export default TodoApp;