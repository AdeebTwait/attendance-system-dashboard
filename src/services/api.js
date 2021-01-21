import axios from 'axios';

export default () => {
    axios.defaults.crossDomain = true;

    // let currentUserString = window.localStorage.currentUser;
    // let currentUser = currentUserString ? JSON.parse(currentUserString) : '';
    return axios.create({
        baseURL: 'http://localhost:7777/api/',
        withCredentials: false,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: currentUser && currentUser.token
        }
    });
}