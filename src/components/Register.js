import React from 'react';
import { useState } from 'react';
import Header from './Header';
import CardsContainer from './CardsContainer';
import Axios from 'axios';

function Register() {

    /* const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState(''); */

    const [registerForm, setRegisterForm] = useState({ username: '', email: '', password: '', phone: '' });
    const [callStatus, setCallStatus] = useState('A');
    console.log(JSON.stringify(registerForm));

    /*     const handleUsername = (event) => {
            console.log(`handleUsername called ${event.target.name}`);
            setUsername(event.target.value);
            console.log('State username updated');
        } */

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(`handleInputChange called ${event.target.name}`);
        setRegisterForm({ ...registerForm, [name]: value });
    }

    const handleFormSubmit = () => {
        console.log('Form data submit clicked');
        /*fetch('http://localhost:3002/user/saveUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerForm)
        })
            .then(resp => {
                console.log(resp);
            }).catch(error => {
                console.error(error);
            });
        **/

        Axios.post('http://localhost:3002/user/saveUser',
            registerForm,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((resp) => {
                console.log(resp);
                setCallStatus('User Saved successfuly');
            }).catch(error => {
                console.error(error);
            });
    }

    return (

        <div>
            <main >
                <p >{callStatus}</p>
                <div className='container col-3'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username {registerForm.username}</label>
                            <input type="text" onChange={handleInputChange} className="form-control" name="username" id="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address {registerForm.email}</label>
                            <input type="email" onChange={handleInputChange} className="form-control" name="email" id="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password {registerForm.password}</label>
                            <input type="password" onChange={handleInputChange} className="form-control" name="password" id="password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone {registerForm.phone}</label>
                            <input type="text" onChange={handleInputChange} className="form-control" name="phone" id="phone" />
                        </div>
                        <button type="button" onClick={handleFormSubmit} className="btn btn-primary">Register</button>
                    </form>
                </div>
            </main >
        </div>
    );
}

export default Register;
