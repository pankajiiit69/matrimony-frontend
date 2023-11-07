
import Main from './components/Main';
import Footer from './components/Footer'
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/Search';
import About from './components/About';
import { Component, useState } from 'react';
import SignUp from './components/SignUp';
import Header from './components/Header';
import MyProfile from './components/MyProfile';
import ProtectedComponent from './components/ProtectedComponent';
import { UserAuthContext } from './context/UserAuthContext';

function App() {
    const [auth, setAuth] = useState({user:{fullname:localStorage.getItem('username')}, authToken:localStorage.getItem("matrimonial_auth_token")});
    return (
        <>
        <p>{`Auth: ${auth.user?'YES':'NO'}`}</p>
            <UserAuthContext.Provider value={{ auth, setAuth }}>
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Main />}></Route>
                        <Route path='/register' element={<SignUp />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/search' element={<Search />}></Route>
                        {/* <Route path='/myProfile' element={authToken ? <MyProfile authToken={authToken} />: <Login callback={setAuthToken} />}></Route> */}
                        <Route path='/myProfile' element={<ProtectedComponent component={MyProfile} />}></Route>
                        {/* <Route path='/myProfile' element={<UserProfile authToken={authToken}/>}></Route> */}
                        <Route path='/about' element={<About />}></Route>
                    </Routes>
                </BrowserRouter>
                <Footer />
            </UserAuthContext.Provider>

        </>
    );
}

export default App;