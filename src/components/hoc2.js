import React, { Fragment } from 'react';



class NewCom extends React.Component
{
    constructor(props) {
        super(props)
    };

    render()
    {

        return(
            <Fragment>
                 <div>
                <div> Name is {this.props.stateData.data} 
                </div>   
                <div>
                    age is {this.props.stateData.age}
                </div>
                <div>
                    id is {this.props.id}
                </div>
            <br></br>
          </div>
            </Fragment>
           
        )
    }
    

}

export default NewCom;
