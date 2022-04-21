import axios from "axios";

const ACCOUNT_API_BASE_URL = 'http://localhost:8080/v1/accounts';

export const loginRequest = (payload) => {
    return axios.post(`${ACCOUNT_API_BASE_URL}/authorization`, payload);
}

export const signUpRequest = (payload) => {
    return axios.post(`${ACCOUNT_API_BASE_URL}`, payload);
}

export const getActualAccountRequest = () => {
    return axios.get(`${ACCOUNT_API_BASE_URL}`, {
        headers: {
            'Authorization': `${localStorage.getItem("Authorization")}`
        }
    });
}

export const patchAccountRequest = (patchBody) => {
    return axios.patch(`${ACCOUNT_API_BASE_URL}`, patchBody, {
        headers: {
            'Authorization': `${localStorage.getItem("Authorization")}`
        }
    });
}