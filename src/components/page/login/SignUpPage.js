import React from 'react'
import {Button, FormControl, FormControlLabel, FormLabel, Link, Radio, RadioGroup, TextField} from "@mui/material";


export const SignUpPage = () => {
    return (
        <div>
            <h2>Реєстрація на Джині</h2>
            <TextField id="standard-basic" label="email" variant="standard"/>
            <br/>
            <TextField id="standard-basic" label="password" variant="standard"/>
            <br/>
            <br/>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Оберіть вашу роль на сервісі</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio/>} label="Я кандидат - шукаю пропозиції"/>
                    <FormControlLabel value="male" control={<Radio/>} label="Я роботодавець - шукаю розробників"/>
                </RadioGroup>
            </FormControl>
            <br/>
            <Button variant="contained" color="primary">Продовжити</Button>
            <br/>

        </div>
    );
}
