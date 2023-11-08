import React from 'react';

export default function ViewProfile({ setFlow, profile }) {

    const handleEdit = () => {
        setFlow('Update');
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
                                                <fieldset disabled >
                                                    <legend>View Profile</legend>
                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="fullname" className="col-form-label">Name:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input readOnly={true} placeholder="Full Name" type="text" name="fullname" className="form-control form-control-lg" value={profile.fullname} />
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="gender" className="col-form-label">Gender:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <select readOnly={true} name="gender" value={profile.gender} className="form-select">
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
                                                            <input readOnly={true} placeholder="Email" type="email" name="email" className="form-control form-control-lg" value={profile.email} />
                                                        </div>
                                                    </div>
                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="address" className="col-form-label">Address:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input readOnly={true} placeholder="Address" type="text" name="address" className="form-control form-control-lg" value={profile.address} />
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="city" className="col-form-label">City:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input readOnly={true} placeholder="City" type="text" name="city" className="form-control form-control-lg" value={profile.city}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="mobile" className="col-form-label">Mobile:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input readOnly={true} placeholder="Mobile" type="phone" name="mobile" className="form-control form-control-lg" value={profile.mobile} />
                                                        </div>
                                                    </div>
                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="caste" className="col-form-label">Caste:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input readOnly={true} placeholder="Caste" type="text" name="caste" className="form-control form-control-lg" value={profile.caste} />
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="age" className="col-form-label">Age:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input readOnly={true} placeholder="Age" type="text" name="age" className="form-control form-control-lg" value={profile.age} />
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="height" className="col-form-label">Height:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input readOnly={true} placeholder="Height" type="text" name="height" className="form-control form-control-lg" value={profile.height} />
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4 row">
                                                        <div className="col-3">
                                                            <label htmlFor="food_habbit" className="col-form-label">Food Habit:</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <input readOnly={true} placeholder="Food Habit" type="text" name="food_habbit" className="form-control form-control-lg" value={profile.food_habbit} />
                                                        </div>
                                                    </div>

                                                </fieldset>
                                                <button className="btn btn-primary btn-lg btn-block" type="button"
                                                    onClick={handleEdit}>Edit</button>
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
