import React, {useEffect, useState} from 'react'
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
import axios from "axios";
import {useParams} from "react-router-dom";

const ACCOUNT_API_BASE_URL = 'http://localhost:8080/v1/accounts/activation';

const sendActivationRequest = (token) => {
    return axios.put(`${ACCOUNT_API_BASE_URL}?token=${token}`);
}

export const Activation = () => {
    const params = useParams()
    const [message, setMessage] = useState([]);

    useEffect(() => {
        sendToken()
    }, [])

    const sendToken = () => {
        sendActivationRequest(params.token)
            .then(resp => {
                setMessage(resp.data.message)
                console.log(message);
            }).catch(e => {
            console.log(e.response.data)
        })
    }

    return (
        <div>
            <h2>Привіт:)</h2>
            <h3>{message}</h3>
        </div>
    );
}
