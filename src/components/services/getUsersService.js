
import Axios from 'axios';
const apiUrl = 'http://localhost:5600/user/';
export default function MyGetUsers() {
    return Axios.get(apiUrl);
};