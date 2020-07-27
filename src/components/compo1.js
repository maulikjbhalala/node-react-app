import React from 'react';



class Compo1 extends React.Component
{
    constructor(props) {
        super(props)
    
        this.state = {
             isError:false,
             errMsg:''
        }
    }


    static getDerivedStateFromError(error) {
        return {errMsg: error.toString()}
      }


    componentDidCatch(err,info)
    {
        // this.setState({
        //     isError:true
        // });
        // console.log('error ',err);
        // console.log('info',info);
        console.log(err.toString(), info.componentStack)

    }



    render() {
        if(this.state.errMsg)
        {
            // return  <h2>{this.state.errMsg}</h2>
            return <div>
                <h1>something wrong</h1>
            </div>
        }
        return this.props.children
    }

};


export default Compo1;