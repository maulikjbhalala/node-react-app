import React from 'react';
import Axios from 'axios';

class Query extends React.Component{


    constructor(props)
    {

        super(props);

        this.state={

            q:''
        };


    };



    componentWillMount()
    {
        this.setState({
            q:this.props.match.params.userId
        })
    }




    render()
    {
        let {q} =this.state;
        return(
            <div>
                <p>User Id is{q}</p> 
            </div>
        )
    }

};

export default Query;


