import React, {useEffect, useState} from 'react'
import {Button, TextField} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import {loginRequest} from "../../service/ApiService";

export const LoginPage = () => {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    let handleRedirect = useNavigate();

    useEffect(() => {
        isAuthorized();
    }, [])

    const isAuthorized = () => {
        if (localStorage.getItem('Authorization') !== null) {
            handleRedirect('/profile')
        }
    }

    const handleInputChange = event => {
        const {name, value} = event.target;
        console.log(name, value, 'event.target')
        setLogin({...login, [name]: value});
    };


    const handleLogin = () => {
        let data = {
            email: login.email,
            password: login.password
        };
        loginRequest(data)
            .then(resp => {
                localStorage.setItem("Authorization", resp.headers.authorization)
                console.log(resp.status)
                if (resp.status === 200) {
                    handleRedirect('/profile');
                }
            }).catch(err => {
            console.log(err.message)
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
