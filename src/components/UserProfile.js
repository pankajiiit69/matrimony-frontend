import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import Header from './Header';

export default function UserProfile({authToken}) {

    const [profile, setProfile] = useState({});
    const [profileForm, setProfileForm] = useState({});

    const formRef = useRef(null);

    console.log(profileForm);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(`handleInputChange called ${event.target.name}`);
        setProfileForm({ ...profileForm, [name]: value });
    }

    const editableFields = ['fullname', 'gender', 'city'];
    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Update Profile Form data submit clicked');
        console.log(JSON.stringify(formRef.current));
        Axios.post('http://localhost:3002/profile/updateProfile',
            profileForm,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authToken
                }
            })
            .then((resp) => {
                console.log(resp);
                console.info('Profile Updated successfully.');
                //setLoginToken(resp.data.token);
                //localStorage.setItem("username", loginForm.username);
                //.setItem("matrimonial_auth_token", resp.data.token);
                //(resp.data.token);
                //setLocalStorage('Authorization',"");
                //navigate('/');
            }).catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        Axios.get('http://localhost:3002/profile/getMyProfile', {
            headers: {
                Authorization: authToken
            }
        }).then(resp => {
            console.info('Profile API called');
            setProfile(resp.data);
            setProfileForm({ fullname: resp.data.fullname, gender: resp.data.gender });
        }).catch(error => {
            console.error(error);
        })
    }, []);


    return (
        <div>
            <main >
                <div className='container'>
                    <section className="py-5 text-center">
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-light">My Profile</h1>
                                <p className="lead text-body-secondary">My matrimonial details</p>
                                <Form ref={formRef} onSubmit={handleFormSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label >Email address</Form.Label>
                                        <Form.Control name="email" type="email" value={profileForm.email} onChange={handleInputChange} placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name="password" type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </section>
                </div>
            </main >
        </div >
    );
}
