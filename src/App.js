import React from 'react'
import './App.css';
import {LoginPage} from "./components/page/login/LoginPage";
import {SignUpPage} from "./components/page/login/SignUpPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/signup' element={<SignUpPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
