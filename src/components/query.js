import React from 'react';

// import QueryString from 'querystring'
import { URLSearchParams } from 'url';

class QueryDemo extends React.Component{

    constructor()
    {
        super();
        this.state={
            queryData:''

        }

    }

    componentWillMount()
    {
        // let id = QueryString.stringify(this.props.location.query.id);
        let id=new URLSearchParams(window.location.search)
        let data=id.get('id');
        console.log(data)
        this.setState({
            queryData:data
        })
        
    }




    render()
    {
        let {queryData} =this.state;
        return(
            <div>
                {console.log(queryData)}
                <p>User Id is{queryData}</p> 
            </div>
        )
    }
};

export default QueryDemo;