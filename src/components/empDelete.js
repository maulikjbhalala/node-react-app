import React, { useEffect } from 'react';
import Axios from 'axios';

import {Link} from 'react-router-dom'

class DeleteEmployee extends React.Component{



componentWillMount()
{
    Axios.delete('http://localhost:5600/emp/' + this.props.match.params.id)
            .then((result) => {
                
                this.props.history.push("/show/")
            });
}


render()
{
    return(
        <h4><Link to="/show"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>All Employees</Link></h4>
    )
}

};



export default DeleteEmployee;