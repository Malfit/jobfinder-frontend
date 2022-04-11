import React, {useEffect, useState} from 'react'
import axios from "axios";

const ACCOUNT_API_BASE_URL = 'http://localhost:8080/v1/accounts';

const getActualAccountResponse = () => {
    return axios.get(`${ACCOUNT_API_BASE_URL}`, {
        headers: {
            'Authorization': `${localStorage.getItem("Authorization")}`
        }
    });
}

export const ProfilePage = () => {
    const [loading, setLoading] = useState(true);
    const [account, setActualAccount] = useState([]);

    useEffect(() => {
        getActualAccount()
    }, [])

    const getActualAccount = () => {
        getActualAccountResponse()
            .then((res) => {
                setLoading(true);
                setActualAccount(res.data)
                console.log(res.data)
                setLoading(false);
            }).catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div>
            {loading && <div>Loading...</div>}
            {!loading && (
                <div>
                    <h2>{account.email}</h2>
                    <h2>{account.role}</h2>
                    <h2>{account.status}</h2>
                </div>
            )}
        </div>
    );
}
