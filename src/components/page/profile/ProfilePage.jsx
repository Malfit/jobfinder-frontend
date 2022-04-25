import React, {useEffect, useState} from 'react'
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {getActualAccountRequest} from "../../service/ApiService";
import {LogoutButton} from "../../button/LogoutButton";
import {ProfileDataItem} from "../../profile/ProfileDataItem";

export const ProfilePage = () => {
    const [loading, setLoading] = useState(false);
    const [account, setActualAccount] = useState({
        id: 0,
        email: '',
        role: '',
        status: '',
        fileData: null
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        getActualAccount()
    }, []);

    let handleNavigateToLoginPage = useNavigate();

    const getActualAccount = () => {
        getActualAccountRequest()
            .then((res) => {
                setLoading(true);
                setActualAccount(res.data)
                setLoading(false);
            }).catch(err => {
            setError(err.response.data)
            if (err.response.status === 401) {
                handleNavigateToLoginPage('/login')
            }
        })
    }

    const image =
        <img
            width={280}
            height={300}
            src={`data:image/jpg;base64,${account.fileData}`}
            alt="avatar"
        />

    const statusColor = account.status === 'active' ? 'green' : 'red';

    return (
        <div>
            {loading && <div>Loading...</div>}
            {!error && !loading && (
                <div>
                    <h2>{image}</h2>
                    <ProfileDataItem
                        color='mediumpurple'
                        data={account.email}
                        field='email'
                    />
                    <ProfileDataItem
                        color='brown'
                        data={account.role}
                        field='role'
                    />
                    <ProfileDataItem
                        color={statusColor}
                        data={account.status}
                        field='status'
                    />
                    <Button>Edit</Button>
                    <LogoutButton/>
                </div>
            )}
            {error && <div>{error.message}</div>}
        </div>
    );
}
