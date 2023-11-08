import React, { useState } from 'react';
import Axios from 'axios';

export default function UpdateProfile({ setFlow, profile, authToken }) {

    const [formData, setFormData] = useState({
        fullname: profile.fullname,
        gender: profile.gender,
        email: profile.email,
        address: profile.address,
        city: profile.city,
        mobile: profile.mobile,
        work_profile: profile.work_profile,
        religion: profile.religion,
        caste: profile.caste,
        age: profile.age,
        height: profile.height,
        food_habbit: profile.food_habbit
    });

    /* const onChange = (event, obj, obj2) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => {
            prevFormData.parameters[name] = (event.target.type === 'radio') ? Boolean(value)
                : ((!value || isNaN(value) || (value && value.endsWith("."))) ? value : parseFloat(value));
            return ({
                ...prevFormData//,//[name]: value
            })
        });
    }; */

    const onChange = (event) => {
        const { name, value } = event.target;
        //console.log(`onChange called ${event.target.name}`);
        setFormData({ ...formData, [name]: value });
    }

    //const editableFields = ['fullname', 'gender', 'city'];


    const handleSubmit = (userAction) => {
        //setAction(userAction);
        console.log(`Profile Update clicked`);

        Axios.post('http://localhost:3002/profile/updateProfile',
            formData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authToken
                }
            })
            .then((resp) => {
                //console.log(resp);
                console.info('Profile Updated successfully.');
                setFlow('Updated');
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
                                            <form>
                                                <fieldset>
                                                    <legend>Update Profile</legend>
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
                                                            <select name="gender" value={formData.gender} onChange={onChange} className="form-select">
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
                                                            <input placeholder="Email" type="email" name="email" className="form-control form-control-lg" value={formData.email} onChange={onChange} />
                                                        </div>
                                                    </div>
                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="address" className="col-form-label">Address:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input placeholder="Address" type="text" name="address" className="form-control form-control-lg" value={formData.address} onChange={onChange} />
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="mobile" className="col-form-label">Mobile:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input disabled placeholder="Phone" type="phone" name="mobile" className="form-control form-control-lg" value={formData.mobile} onChange={onChange} />
                                                        </div>
                                                    </div>

                                                </fieldset>
                                                <button className="btn btn-primary btn-lg btn-block" type="button"
                                                    onClick={handleSubmit}>Update</button>
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
