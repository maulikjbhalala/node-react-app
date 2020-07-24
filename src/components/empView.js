

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
    return(
         <ViewLoad emp={this.state.emp}/>
     );
    }

};


export default EmpView;
