import React, {useState} from 'react'
import {Button, TextField} from "@mui/material";
import {NavLink} from "react-router-dom";
import axios from "axios";

const ACCOUNT_API_BASE_URL = 'http://localhost:8080/v1/accounts';

const loginRequest = (payload) => {
    return axios.post(`${ACCOUNT_API_BASE_URL}/authorization`, payload);
}

export const LoginPage = () => {

    const initLoginState = {
        email: "",
        password: ""
    }

    const [login, setLogin] = useState(initLoginState);

    const handleInputChange = event => {
        const {name, value} = event.target;
        // console.log(name, value, 'event.target')
        setLogin({...login, [name]: value});
    };

    const handleLogin = () => {
        let data = {
            email: login.email,
            password: login.password
        };

        loginRequest(data)
            .then(resp => {
                console.log(resp.headers.authorization)
                // console.log(resp.data.message);
                localStorage.setItem("Authorization", resp.headers.authorization)
                // console.log(resp.data)
            }).catch(err => {
            console.log(err.response.data)
        })
    }

    return (
        <div>
            <h2>Увійти на Джин</h2>
            <TextField
                value={login.email}
                label="email"
                variant="standard"
                name={'email'}
                onChange={handleInputChange}
            />
            <br/>
            <TextField
                type="password"
                value={login.password}
                label="password"
                variant="standard"
                name={'password'}
                onChange={handleInputChange}
            />
            <br/>
            <br/>
            <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
            >
                Увійти
            </Button>
            <br/>
            <NavLink to="/signup">Реєстрація</NavLink>
        </div>
    );
}
