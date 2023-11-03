
import Main from './components/Main';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/Search';
import About from './components/About';
import { Component, useState } from 'react';
import SignUp from './components/SignUp';
import Header from './components/Header';
import MyProfile from './components/MyProfile';
import ProtectedComponent from './components/ProtectedComponent';

function App() {
    const [authToken, setAuthToken] = useState(localStorage.getItem("matrimonial_auth_token"));
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main authToken={authToken} />}></Route>
                    <Route path='/register' element={<SignUp />}></Route>
                    <Route path='/login' element={<Login callback={setAuthToken} />}></Route>
                    <Route path='/search' element={<Search authToken={authToken} />}></Route>
                    {/* <Route path='/myProfile' element={authToken ? <MyProfile authToken={authToken} />: <Login callback={setAuthToken} />}></Route> */}
                    <Route path='/myProfile' element={<ProtectedComponent authToken={authToken} setAuthToken={setAuthToken} component={MyProfile} />}></Route>
                    {/* <Route path='/myProfile' element={<UserProfile authToken={authToken}/>}></Route> */}
                    <Route path='/about' element={<About />}></Route>
                </Routes>
            </BrowserRouter>
            <p>{authToken}</p>
        </>
    );
}

export default App;