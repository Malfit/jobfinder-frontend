import React from 'react'
import {Button, Link, TextField} from "@mui/material";
import {NavLink} from "react-router-dom";


export const LoginPage = () => {
    return (
        <div>
            <h2>Увійти на Джин</h2>
            <TextField id="standard-basic" label="email" variant="standard"/>
            <br/>
            <TextField id="standard-basic" label="password" variant="standard"/>
            <br/>
            <br/>
            <Button variant="contained" color="primary">Увійти</Button>
            <br/>
            <NavLink to="/signup">Реєстрація</NavLink>
        </div>
    );
}
