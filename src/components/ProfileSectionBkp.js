import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Header from './Header';

export default function ProfileSection({ authToken }) {

    //const [profile, setProfile] = useState({});
    const [action, setAction] = useState();
    const [formData, setFormData] = useState({
        fullname: '',
        gender: "",
        email: "",
        address: "",
        city: "",
        mobile: null,
        work_profile: "",
        religion: "",
        caste: "",
        age: null,
        height: null,
        food_habbit: ""
    });

    console.log(formData);
    /* const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(`handleInputChange called ${event.target.name}`);
        setformData({ ...formData, [name]: value });
    } */

    const handleInputChange = (event, obj, obj2) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => {
            prevFormData.parameters[name] = (event.target.type === 'radio') ? Boolean(value)
                : ((!value || isNaN(value) || (value && value.endsWith("."))) ? value : parseFloat(value));
            return ({
                ...prevFormData//,//[name]: value
            })
        });
    };

    const editableFields = ['fullname', 'gender', 'city'];


    const handleFormSubmit = () => {
        console.log('Update Profile Form data submit clicked');
        Axios.post('http://localhost:3002/profile/updateProfile',
            formData,
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
            //setProfile(resp.data);
            setFormData({ ...formData, ...resp.data });
            if (Object.keys(resp.data).length == 0) {
                setAction('create');
            } else {
                setAction('update');
            }
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
                                {action &&
                                    <form>
                                        <div className="mb-3">
                                            <label for="fullname" className="form-label">Name</label>
                                            <input type="text" className="form-control" name="fullname" />
                                        </div>
                                        <div className="form-check">
                                            <input className="" type="radio" name="gender" id="genderMale" checked/>
                                            <label className="form-check-label" for="genderMale">
                                                Male
                                            </label>
                             
                                            <input className="" type="radio" name="gender" id="genderFemale" />
                                            <label className="form-check-label" for="genderFemale">
                                                Female
                                            </label>
                                        </div>
                                        <div className="mb-3">
                                            <label for="email" className="form-label">Email address</label>
                                            <input type="email" className="form-control" name="email" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                   
                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                        </div>
                                        <div className="col-4 col-md-6">
                                                <label htmlFor="gender" className="col-form-label">Gender</label>
                                                <div>
                                                    <label htmlFor="genderM">True</label>
                                                    <input type="radio" id="genderM" name="gender" value="notempty" checked={true === true} onChange={handleInputChange} />
                                                    <label htmlFor="genderF" >False</label>
                                                    <input type="radio" id="genderF" name="gender" value="" checked={true === false} onChange={handleInputChange} />
                                                </div>
                                            </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>

                                        {
                                            Object.entries(formData).map((entry) => {
                                                return (
                                                    <tr key={entry[0]}>
                                                        <td>
                                                            <label htmlFor={entry[0]} className="form-label">{entry[0]}</label>
                                                            <input disabled={action === 'update' && editableFields.includes(entry[0])} type="text" value={formData[entry[0]]} onChange={handleInputChange} className="form-control col-2" name={entry[0]} id={entry[0]} />
                                                        </td>
                                                    </tr>);
                                            })
                                        }

                                        <button type="button" onClick={handleFormSubmit} className="btn btn-primary">Update Profile</button>

                                    </form>
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </main >
        </div >
    );
}
