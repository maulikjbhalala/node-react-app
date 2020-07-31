import React from 'react';



const SearchBox = ({ q, dataChange, nullInput, dataBackSpace }) => {

    return (
        <div>
            <div class="form-group">
                <input type="text" class="form-control" name="empName" value={q} onChange={dataChange} onKeyDown={dataBackSpace} placeholder="Enter Employee Name to search here" />
            </div>
            <button type="submit" onClick={nullInput} class="btn btn-default">Reset</button>

        </div>

    );
};;


export default SearchBox;