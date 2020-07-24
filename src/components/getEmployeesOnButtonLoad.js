import React from 'react';
import Button from 'react-bootstrap/Button';

const EmployeeLoad=({buttonClick})=>
{
    return(
                 <div className="panel-body">
                  <div  className="panel-body">
                <Button variant="outline-success" onClick={buttonClick}>Fetch Data</Button>
                </div>
                  </div>
    );
};

export default EmployeeLoad;