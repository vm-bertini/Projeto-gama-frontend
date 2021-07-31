import Cookies from 'js-cookie';
import axios from "axios"

const BASEAPI = 'http://localhost:3333';

const apiFetchPost = async (endpoint, body) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if(token) {
            body.token = token;
        }
    }

    const json = await axios.post(BASEAPI+endpoint, body, {withCredentials: true}).then((response) =>{
        return response.data
    }).catch((err) =>{
        return err.response.data
    })

    if(json.notallowed) {
        window.location.href= 'signin/';
        return;
    }

    return json;
}

const apiFetchGet = async (endpoint) => {

    const res = await axios.get(BASEAPI+endpoint, {withCredentials: true}); 
    const json = res.data
    
    if(json.notallowed) {
        window.location.href= 'signin/';
        return;
    }

    return json;
}

const apiFetchDel = async (endpoint) => {

    const res = await axios.delete(BASEAPI+endpoint, {withCredentials: true}); 
    const json = res.data
    
    if(json.notallowed) {
        window.location.href= '/';
        return;
    }

    return json;
}

const BookAPI = {

    login:async (name, password) => {
        const json = await apiFetchPost(
            '/v1/login',
            {name, password}
        ); 
        return json;  
    },
    getUserInfo: async () => {
        const json = await apiFetchGet('/v1/login/')
        return json
    },
    logout:async ()=>{
        const json = await apiFetchDel('/v1/logout/')
        return json
    }
};

const useApi = () => BookAPI;

export default useApi