import React, { Suspense } from 'react';
const BoxLoad = React.lazy(() => import('./searchBox'));

const EmpsLoad = ({ emps, q, dataChange, nullInput, dataBackSpace }) => {
    return (
        <div className="container">

            <Suspense fallback={<div>
                <p style={{ color: 'green' }}>
                    Filter is loading.
                    </p>
            </div>}>
                <BoxLoad q={q} dataChange={dataChange} nullInput={nullInput} dataBackSpace={dataBackSpace} />
            </Suspense>


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


                            {emps.map(emp =>
                                <tr style={{ color: 'brown' }} key={emp._id} >
                                    <td>{emp.empId}</td>
                                    <td>{emp.empName}</td>
                                    <td >{emp.empEmail}</td>
                                    <td>{emp.empDesg}</td>
                                    <td>{emp.empDept}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>




        </div>

    )




};


export default EmpsLoad;