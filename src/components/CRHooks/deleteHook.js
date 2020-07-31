import React, { useEffect } from 'react';
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteData = props => {


    let id = new URLSearchParams(window.location.search);
    let data = (id.get('id'));
    console.log(data);
    data = data.trim()

    useEffect(() => {
        Axios.delete('http://localhost:5600/user?id=' + data).then((result) => {
            props.history.push('/showHook');
            toast.success('User Deleted Suceesfully')

        })

    }, [])

    return (
        <div>
            <ToastContainer />
        </div>
    )
};

export default DeleteData;