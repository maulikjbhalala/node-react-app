import React from 'react';



const SearchBox= ({q,dataChange,nullInput})=>
{

    return(
              <div>
            <div class="form-group">
                <input type="text" class="form-control" name="empName" value={q} onChange={dataChange} placeholder="Enter Employee Name to search here" />
            </div>
                <button type="submit"  onClick={nullInput} class="btn btn-default">Reset</button>
                
            </div>

    );
};;


export default SearchBox;