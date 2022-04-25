import React, {useEffect, useState} from 'react'
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import {isAuthorized, signUpRequest} from "../../service/ApiService";

export const SignUpPage = () => {
    const [account, setAccount] = useState({
        email: '',
        password: '',
        role: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState({
        details: []
    })
    // useEffect(() => {
    //     console.log(account)
    // }, [account]) // log changes of account.

    let handleRedirect = useNavigate();

    useEffect(() => {
        isAuthorized(handleRedirect)
    })

    const handleInputChange = event => {
        const {name, value} = event.target;
        console.log(name, value, 'event.target')
        setAccount({...account, [name]: value});
    };

    const saveAccount = () => {
        signUpRequest(account)
            .then(resp => {
                setSubmitted(true);
            }).catch(err => {
            console.log(err.response.data)
            setError(err)
            setSubmitted(false)
        })
    }

    return (
        <div>
            <h2>Реєстрація на Джині</h2>
            <div className='signup-input'>
                <TextField
                    value={account.email}
                    label="email"
                    variant="standard"
                    name={'email'}
                    onChange={handleInputChange}
                />
            </div>
            <div className='signup-input'>
                <TextField
                    type='password'
                    value={account.password}
                    label="password"
                    name="password"
                    variant="standard"
                    onChange={handleInputChange}
                />
            </div>
            <div className='signup-input'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Оберіть вашу роль на сервісі</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="role"
                        value={account.role}
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value={'ROLE_CANDIDATE'} control={<Radio/>}
                                          label="Я кандидат - шукаю пропозиції"/>
                        <FormControlLabel value={'ROLE_COMPANY'} control={<Radio/>}
                                          label="Я роботодавець - шукаю розробників"/>
                    </RadioGroup>
                </FormControl>
            </div>
            {!submitted ?
                <Button
                    variant="contained"
                    color="primary"
                    onClick={saveAccount}>
                    Продовжити
                </Button>
                : <NavLink to="/login">Залогуватись</NavLink>
            }
            <div>
                {error.details.length > 0
                    ? error.details.map(detail =>
                        <strong className='error-message'>{detail.issue}</strong>
                    )
                    : ''
                }
            </div>
        </div>
    );
}
