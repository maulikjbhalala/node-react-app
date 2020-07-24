import React, { Suspense } from 'react'
const GetLoadData=React.lazy(()=>import('./getAllEmpsLoad'));

const FilterLoad=({q,dataChange,nullInput,emps})=>
{

    // const LoadData=()=>
    // {
    //     <div>
    //         load more data
    //     </div>
    // }

    return (
    <div>
        <Suspense fallback={<div>Loading..</div>}>
            <GetLoadData emps={emps} q={q} dataChange={dataChange} nullInput={nullInput}/>
        </Suspense>
    </div>
    )

};


export default FilterLoad;