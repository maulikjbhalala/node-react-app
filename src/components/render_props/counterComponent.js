import React, { Component } from 'react'

export default class counterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }   
        this.onDataChange = this.onDataChange.bind(this);
    }

    // componentWillMount() {
    //     this.setState({
    //         name:'maulik'
    //     })

    // };

    onDataChange = (e) => {

        this.setState({
            name: e.target.value
        })
    }
    


    render() {
        return (
            <div>
                {/* {this.props.render(this.state.name, this.onDataChange)} */}

                {/* now pass as children */}
                {this.props.children(this.state.name, this.onDataChange)}
            </div>
        )
    }
}
