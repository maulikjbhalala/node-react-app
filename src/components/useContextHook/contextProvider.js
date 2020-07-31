import React from 'react';
import ConsumeComp from './contextConsumer';
import {Provider} from './contextFile';    

class ContextProvider extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
             names:[{name:"maulik",id:500},{name:'vishal',id:502},{name:'dharmesh',id:503}]
        };
        this.onButtonClick=this.onButtonClick.bind(this);
        this.onRemoveClick=this.onRemoveClick.bind(this);
    }
    
 

    onButtonClick=()=>
    {
        let newArr=[];
        newArr.push({name:'mj',id:504});
        this.setState({
            names:this.state.names.concat(newArr)
        })
    };

    onRemoveClick=()=>
    {
        let newArr=[];
        newArr=this.state.names
        newArr.pop();
        // let popArr=[]=newArr.pop()
        this.setState({
            names:newArr
        })

    }
    
    render()
    {
        return (
            <Provider value={{state:this.state,pushData:this.onButtonClick,popData:this.onRemoveClick}}>
                <ConsumeComp/>
            </Provider>
          );
    }

};


export default ContextProvider;

