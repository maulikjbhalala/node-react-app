import { connect } from "react-redux";
import React from 'react';
import {getData} from './userActions';


class MyReduxReactComponent extends React.Component
{


    constructor(props) {
        super(props)
    
        this.state = {
             name:''
        }
        this.submitHandle=this.submitHandle.bind(this);
        this.onChangeHandle=this.onChangeHandle.bind(this)
    }
    

    componentDidMount()
    {
        this.props.dispatch(getData());
    }


    submitHandle=(e)=>
    {

        e.preventDefault();
        this.props.dispatch({
            type:'GET_NAME',
            payload:{}
        })

    };

    onChangeHandle=(e)=>
    {
        this.setState({name:e.target.value});
    };





    render()
    {
        // let {data}=this.props;
        // return(
        //     <div>
        //         {data.map((dataObj=>
                    
        //                 <p> {dataObj}</p>

        //             ))}
        //     </div>
        // )


        <div>
            <form onSubmit={this.submitHandle}>
            <label>
                Name:
            </label>
            <br>
            </br>
            <input type='text' name='name' onChange={this.onChangeHandle}></input>
            </form>
        </div>
        
        
    };
    
}


//this functional will take entire state and returns /pulls the props
function mapStateToProps(state) {
    return {
        names: state.names
    };
  }


  //


export default connect(mapStateToProps)(MyReduxReactComponent)