import React from 'react';



class MyCom extends React.Component
{

    constructor(props) {
        super(props)
    };

    render()
    {

        return(
            <div> data is {this.props.data} 
            <br></br>
            id is{this.props.id}
            <p>
                Age is {this.props.age}
            </p>
                </div>
        )
    }
    

}

export default MyCom;
