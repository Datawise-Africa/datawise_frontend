import { REACT_PUBLIC_API_HOST } from "../constants";
import { getAccessToken } from "../lib/auth/actions"

const apiService = {
    post: async function (url, data) {
        // console.log('post', url, data);
    
        return new Promise((resolve, reject) => {
            let full_url = `${REACT_PUBLIC_API_HOST}${url}`
            fetch(full_url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then((json) => {
                resolve(json);
            })
            .catch((error) => {
                reject(error);
            })
        })
    },

    get: async function (url) {
        // console.log('get', url);

        return new Promise((resolve, reject) => {
            let full_url = `${REACT_PUBLIC_API_HOST}${url}`
            fetch(full_url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then((json) => {
                resolve(json);
            })
            .catch((error) => {
                reject(error);
            })
        })
    },

    getProtected: async function (url) {
        // console.log('get', url);
        const accessToken = getAccessToken();
        // console.log('get', accessToken);

        return new Promise((resolve, reject) => {
            let full_url = `${REACT_PUBLIC_API_HOST}${url}`
            fetch(full_url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${accessToken}`
                }
            })
            .then(response => response.json())
            .then((json) => {
                resolve(json);
            })
            .catch((error) => {
                reject(error);
            })
        })
    }
}

export default apiService;