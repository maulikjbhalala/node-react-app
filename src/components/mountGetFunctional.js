import Axios from 'axios';

// import 
import React, { useEffect, useState } from 'react';

const GetAPICall =()=>
{
    const [name,setName]=useState('');
    const [count,setCount]=useState(0);
    const [data,setData]=useState([]);

    // const dataChange=(e)=>
    // {
    //     setName(e.target.value)
    // };



    
useEffect(() => {  
    const GetData = async () => {  
      const result = await Axios('http://localhost:5600/d');  
      console.log(result.data.depts)
      const dataArr=result.data.depts;
      setData(dataArr);  
    };  
  
    GetData();  
  }, []); 


    return(
        <div>
                 <div className="panel-body">
                        <table padding='2' class="table table-stripe">
                            <thead>
                                <tr style={{ color: 'DarkOrchid' }}>
                                    <th>Department Name</th>
                                  
                                </tr>
                                <p></p>
                            </thead>
                            <tbody>
                                { data.map(emp =>
                                    <tr style={{ color: 'brown' }} >
                                        <td>{emp.name}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
        </div>
    )

    };


export default GetAPICall;
