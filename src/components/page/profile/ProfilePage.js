import React, {useEffect, useState} from 'react'
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {getActualAccountRequest} from "../../service/ApiService";

export const ProfilePage = () => {
    const [loading, setLoading] = useState(false);
    const [account, setActualAccount] = useState({
        id: 0,
        email: '',
        role: '',
        status: '',
    });
    const [err, setError] = useState(null);

    useEffect(() => {
        getActualAccount()
    }, []);

    let handleNavigateToLoginPage = useNavigate();

    const getActualAccount = () => {
        getActualAccountRequest()
            .then((res) => {
                setLoading(true);
                setActualAccount(res.data)
                console.log(res.data)
                setLoading(false);
            }).catch(error => {
            let errorResponse = error.response.data;
            console.log(errorResponse)
            setError(errorResponse)
            if (error.response.status === 401) {
                handleNavigateToLoginPage('/login')
            }
        })
    }

    return (
        <div>
            {loading && <div>Loading...</div>}
            {!err && !loading && (
                <div>
                    <h2>Your email: <span style={{color: "mediumpurple"}}>{account.email}</span></h2>
                    <h2>Your user role: <span style={{color: 'brown'}}>{account.role}</span></h2>
                    <h2>Your user status: <span style={{color: 'green'}}>{account.status}</span></h2>
                    <Button>Edit</Button>
                </div>
            )}
            {err && <div>{err.message}</div>}
        </div>
    );
}
