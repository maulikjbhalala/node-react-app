import React from  'react';

 class PaginationClass extends React.Component{

    constructor()
    {

        super();
        this.setState({
            data:''
        })


    };

    componentWillMount()
    {
      this.setState({
          data:'mydata'
      })
    }

    render()
    {

        return(<div>
            <p>
                <h1>pagination screen</h1>
            </p>
            <p>
                {console.log(this.state.data)}
                {this.state.data}
            </p>
        </div>);
    }

};

export default PaginationClass;