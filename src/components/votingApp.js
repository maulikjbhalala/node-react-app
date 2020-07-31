import React from 'react';


class VotingApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nodeVote: 0,
            reactVote: 0,
            vueVote: 0,
            highestVote: 0,
            highestGetterName: ''
        };
        this.nodeButtonClick = this.nodeButtonClick.bind(this);
        this.reactButtonClick = this.reactButtonClick.bind(this);
        this.vueButtonClick = this.vueButtonClick.bind(this);
    };




    nodeButtonClick = (e) => {
        e.preventDefault()
        let { nodeVote } = this.state;
        this.setState({
            nodeVote: nodeVote + 1
        })
    };

    reactButtonClick = (e) => {
        let { reactVote } = this.state;
        this.setState({
            reactVote: reactVote + 1
        })
    };

    vueButtonClick = (e) => {
        let { vueVote } = this.state;
        this.setState({
            vueVote: vueVote + 1
        })
    };





    render() {
        let { nodeVote } = this.state;
        let { reactVote } = this.state;
        let { vueVote } = this.state;
        let highestVote = 0;
        // let { highestGetterName } = this.state
        let highestGetterName = ''
        if (nodeVote >= reactVote && nodeVote >= vueVote) {

            highestVote = nodeVote;
            highestGetterName = 'Node'
        }
        else if (reactVote >= nodeVote && reactVote >= vueVote) {
            highestVote = reactVote;
            highestGetterName = 'React'
        }
        else if (vueVote >= nodeVote && vueVote >= reactVote) {
            highestVote = vueVote;
            highestGetterName = 'Vue'
        }

        return (
            <div>
                <div>
                    <table>
                        <tr>
                            <p> Node Vote:</p>
                            <h3 style={{ color: 'green' }}>
                                {nodeVote}
                            </h3>
                        </tr>
                        <td>
                            <form>
                                <button type='button' onClick={this.nodeButtonClick}>Add Node Vote</button>
                            </form>
                        </td>

                    </table>



                </div>
                <div>
                    <p> React Vote:</p>
                    <h3 style={{ color: 'pink' }}>
                        {reactVote}
                    </h3>
                    <form>
                        <button type='button' onClick={this.reactButtonClick}>Add React Vote</button>
                    </form>

                </div>
                <div>
                    <p> Vue Vote:</p>
                    <h3 style={{ color: 'blue' }}>
                        {vueVote}
                    </h3>
                    <form>
                        <button type='button' onClick={this.vueButtonClick}>Add Vue Vote</button>
                    </form>

                </div>
                <div>
                    <h3 style={{ color: 'blue' }}>
                        Vote {highestVote} is highest getter :
                           {highestGetterName !== undefined || highestGetterName !== null ? highestGetterName : ''}
                    </h3>
                    <form>
                    </form>
                </div>

            </div>
        )
    }



};


export default VotingApp;