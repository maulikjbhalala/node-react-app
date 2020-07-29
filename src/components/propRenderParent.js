import ChildProp from './childerenProp';
import GrandChildProp from './grandChildProp';
import React from 'react'
const parentPropFunc=()=>
{

    return(
        <ChildProp>
        {/* <GrandChildProp/> */}
        {name=><GrandChildProp sd={name}/>}
        
    </ChildProp>
    )


};

export default parentPropFunc;