import React from 'react';

import axios from 'axios';
import EmpDisplay from './displayFormLoad'

class Display extends React.Component {
    constructor() {
        super();
        this.state =
        {
            emps: [],
            loading: false
        };
        this.onClick=this.onClick.bind(this)
    }


    onClick = () => {
        this.setState({
            loading:true
        })
        axios.get('http://localhost:5600/emp')
            .then(res => {
                this.setState({ emps: res.data, loading: false });
            });
      }


    render() {
        return(
            <EmpDisplay emps={this.state.emps} buttonClick={this.onClick}  loading={this.state.loading}/>
        )
     
    };
};


export default Display;