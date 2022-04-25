import React from 'react'
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const LogoutButton = () => {
    let handleRedirect = useNavigate(); // const 

    const handleLogout = () => {
        localStorage.removeItem('Authorization')
        handleRedirect('/login')
    }
    // + white space
    return (
        <div>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}
