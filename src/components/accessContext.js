import React from 'react';
import NewCon from './contextFile';

class ContextConsumer extends React.Component {

    // const context = useContext(contextValue);

    render() {

        return (
            <NewCon>
                <div>
                    name is {name}
                </div>
            </NewCon>
        )
    }

};


export default ContextConsumer;

