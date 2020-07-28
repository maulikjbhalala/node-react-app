  import {Provider} from './formContext';
    import React, { Component } from 'react';
    import Child from './formConsumer';
    
    export class formConsumer extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 name:'',
                 age:null
            };
            this.onDataChange=this.onDataChange.bind(this);
            this.onDataChange1=this.onDataChange1.bind(this)


            
        }

        onDataChange=(e)=>
        {
        this.setState({name:e.target.value});
        };


        onDataChange1=(e)=>
        {
        this.setState({age:e.target.value});
        };

      

        
        render() {
            
            return (
                    <Provider value={{onData:this.onDataChange,onData1:this.onDataChange1,state:this.state}}>
                        <Child/>
                    </Provider>
                
              
            )
        }
    }
    
    export default formConsumer
    