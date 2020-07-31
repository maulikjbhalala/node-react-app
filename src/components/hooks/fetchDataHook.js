import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const FetchDataHook = () => {
    const [names, setName] = useState([]);

    useEffect(() => {
        const getEmps = async () => {

            const getEmp = await Axios.get('https://test-api-mauik.herokuapp.com/users');
            setName(getEmp.data.data);

        };
        getEmps();
    }, []);



    return (
        <div>
            <div >
                <ul>
                    {names.map(obj =>
                        <li key={obj._id}>
                            name is : {obj.name}
                            <br>
                            </br>
                            email is:  {obj.email} </li>


                        // <li> {obj.email} </li>
                    )}

                </ul>
            </div>
        </div>
    )
}

export default FetchDataHook
