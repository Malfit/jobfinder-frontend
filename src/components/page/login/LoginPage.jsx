import React, {useEffect, useState} from 'react'
import {Button, TextField} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import {isAuthorized, loginRequest} from "../../service/ApiService";

export const LoginPage = () => {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState({
        timestamp: 0,
        id: '',
        status: 0,
        message: '',
        path: ''
    });

    let handleRedirect = useNavigate();

    useEffect(() => {
        isAuthorized(handleRedirect);
    }, [])


    const handleInputChange = event => {
        const {name, value} = event.target;
        console.log(name, value, 'event.target')
        setLogin({...login, [name]: value});
    };


    const handleLogin = () => {
        loginRequest(login)
            .then(resp => {
                localStorage.setItem("Authorization", resp.headers.authorization)
                if (resp.status === 200) {
                    handleRedirect('/profile');
                }
            }).catch(err => {
            console.log(err.response.data)
            console.log(err.response.data.message)
            setError(err.response.data)
            return
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
            <div>
                {error.message === '' ? '' : <strong className='error-message'>{error.message}</strong>}
            </div>
            <br/>
            <NavLink to="/signup">Реєстрація</NavLink>
        </div>
    );
}
