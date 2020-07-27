import React, { Suspense } from 'react'
const GetLoadData=React.lazy(()=>import('./getAllEmpsLoad'));

const FilterLoad=({q,dataChange,nullInput,emps})=>
{

    return (
    <div>
        <Suspense fallback={<div>Employees are fetching..</div>}>
            <GetLoadData emps={emps} q={q} dataChange={dataChange} nullInput={nullInput}/>
        </Suspense>
    </div>
    )

};


export default FilterLoad;