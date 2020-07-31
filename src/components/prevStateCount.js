import React, { Component } from 'react'

export default class prevStateCount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        };
        this.onDataClick = this.onDataClick.bind(this);
    };



    onDataClick = () => {
        // let { count } = this.state;
        // this.setState({ count: count + 1 });

        //use previous value of count to increment
        this.setState(
            prevCount=>
            {
                return {
                    count:prevCount.count+1
                }
            }
        )

    }

    render() {
        return (
            <div>
                <p>
                    count : {this.state.count}
                </p>
                <button type="button" onClick={this.onDataClick}>
                    Increment Count
                </button>
            </div>

        )
    }
}
