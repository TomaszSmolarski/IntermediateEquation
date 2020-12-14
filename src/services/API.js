import axios from 'axios'

export default  axios.create({
    // baseURL: 'http://jsonplaceholder.kisim.eu.org/'
    baseURL: 'http://localhost:8080',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    withCredentials:true
});
