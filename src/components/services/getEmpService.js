import Axios from 'axios';

const apiUrl = 'http://localhost:5600/emp/';
export default function MyEmpApiCall() {

    return Axios.get(apiUrl).then((result) => result);
};