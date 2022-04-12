import React from 'react'
import './App.css';
import {LoginPage} from "./components/page/login/LoginPage";
import {SignUpPage} from "./components/page/signup/SignUpPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ProfilePage} from "./components/page/profile/ProfilePage";
import {Activation} from "./components/page/activation/Activation";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/signup' element={<SignUpPage/>}/>
                    <Route path='/activation/:token' element={<Activation/>}/>
                    <Route path='/profile' element={<ProfilePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
