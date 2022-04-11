import React from 'react'
import './App.css';
import {LoginPage} from "./components/page/login/LoginPage";
import {SignUpPage} from "./components/page/signup/SignUpPage";
import {BrowserRouter, Route} from "react-router-dom";
import Routes from 'react-router-dom'
import {ProfilePage} from "./components/page/profile/ProfilePage";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/signup' element={<SignUpPage/>}/>
                    <Route path='/profile' element={<ProfilePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
