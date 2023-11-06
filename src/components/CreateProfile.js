import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { getMyProfile } from '../service/ProfileService';

export default function CreateProfile({ setFlow, authToken}) {

    const [formData, setFormData] = useState({
        fullname: '',
        gender: 'M',
        email: "",
        address: "",
        city: "",
        mobile: '',
        age: 21
    });

    const onChange2 = (event, obj, obj2) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => {
            prevFormData.parameters[name] = (event.target.type === 'radio') ? Boolean(value)
                : ((!value || isNaN(value) || (value && value.endsWith("."))) ? value : parseFloat(value));
            return ({
                ...prevFormData//,//[name]: value
            })
        });
    };

    const onChange = (event) => {
        const { name, value } = event.target;
        //console.log(`onChange called ${event.target.name}`);
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3002/profile/saveProfile',
            formData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authToken
                }
            })
            .then((resp) => {
                console.log(resp);
                console.info('Profile Created successfully.');
                setFlow('Created');
                //setLoginToken(resp.data.token);
            }).catch(error => {
                console.error(error);
            });
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <section className="vh-100" >
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                                    <div className="card shadow-2-strong" style={{ borderRadius: '1rem', backgroundColor: '#508bfc' }}>
                                        <div className="card-body p-5 text-center">
                                            <form onSubmit={handleSubmit}>
                                                <fieldset>
                                                    <legend>Create Profile</legend>
                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="fullname" className="col-form-label">Name:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input placeholder="Full Name" type="text" name="fullname" className="form-control form-control-lg" value={formData.fullname} onChange={onChange} />
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="gender" className="col-form-label">Gender:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <select required name="gender" value={formData.gender} onChange={onChange} className="form-select">
                                                                <option value='M'>Male</option>
                                                                <option value='F'>Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="email" className="col-form-label">Email:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input required placeholder="Email" type="email" name="email" className="form-control form-control-lg" value={formData.email} onChange={onChange} />
                                                        </div>
                                                    </div>
                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="address" className="col-form-label">Address:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input required placeholder="Address" type="text" name="address" className="form-control form-control-lg" value={formData.address} onChange={onChange} />
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="city" className="col-form-label">City:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input required placeholder="City" type="text" name="city" className="form-control form-control-lg" value={formData.city} onChange={onChange} />
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="mobile" className="col-form-label">Mobile:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input required placeholder="Mobile" type="phone" name="mobile" className="form-control form-control-lg" value={formData.mobile} onChange={onChange} />
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="caste" className="col-form-label">Caste:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input placeholder="Caste" type="text" name="caste" className="form-control form-control-lg" value={formData.caste} onChange={onChange} />
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="age" className="col-form-label">Age:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input required placeholder="Age" type="text" name="age" className="form-control form-control-lg" value={formData.age} onChange={onChange} />
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="height" className="col-form-label">Height:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input placeholder="Height" type="text" name="height" className="form-control form-control-lg" value={formData.height} onChange={onChange} />
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="food_habbit" className="col-form-label">Food Habit:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input placeholder="Food Habit" type="text" name="food_habbit" className="form-control form-control-lg" value={formData.food_habbit} onChange={onChange} />
                                                        </div>
                                                    </div>

                                                </fieldset>
                                                <button className="btn btn-primary btn-lg btn-block" type="submit">Save</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
