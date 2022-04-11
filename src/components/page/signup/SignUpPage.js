import React, {useState} from 'react'
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
import axios from "axios";

const ACCOUNT_API_BASE_URL = 'http://localhost:8080/v1/accounts';

const signUpRequest = (payload) => {
    return axios.post(`${ACCOUNT_API_BASE_URL}`, payload);
}

export const SignUpPage = () => {

    const initAccountState = {
        email: "",
        password: "",
        role: "",
    }

    const [account, setAccount] = useState(initAccountState);
    const [submitted, setSubmitted] = useState(false);

    // useEffect(() => {
    //     console.log(account)
    // }, [account]) -- log changes of account.

    const handleInputChange = event => {
        const {name, value} = event.target;
        console.log(name, value, 'event.target')
        setAccount({...account, [name]: value});
    };
    const saveAccount = () => {
        let data = {
            email: account.email,
            password: account.password,
            role: account.role
        };
        signUpRequest(data)
            .then(resp => {
                setSubmitted(true);
                console.log(resp.data);
            }).catch(e => {
            console.log(e.response.data)
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
            <Button variant="contained" color="primary" onClick={saveAccount}>Продовжити</Button>
        </div>
    );
}
