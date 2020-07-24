import React from 'react';


const EmpsLoad =({emps,q,dataChange,nullInput})=>
{
    return(
        <div className="container">
        <div>
                <div class="form-group">
                    <input type="text" class="form-control" name="empName" value={q} onChange={dataChange} placeholder="Enter Employee Name to search here" />
                </div>
                    <button type="submit"  onClick={nullInput} class="btn btn-default">Reset</button>
                    
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


                        { emps.map(emp =>
                            <tr style={{ color: 'brown' }} key={emp._id} >
                                <td>{emp.empId}</td>
                                <td>{emp.empName}</td>
                                <td >{emp.empEmail}</td>
                                <td>{emp.empDesg}</td>
                                <td>{emp.empDept}</td>
                            </tr>
                        )}
                        {/* <Suspense fallback={<p> Still Loading..</p>}>
                            <GetLoadData emps={emps}/>
                        </Suspense> */}
                        
                    </tbody>
                </table>
            </div>
        </div>
  

    
   
    </div>

    )




};


export default EmpsLoad;