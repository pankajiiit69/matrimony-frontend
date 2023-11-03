import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios';
import Header from './Header';


const SignUp = (props) => {
  const [userForm, setUserForm] = useState({ email: '', username: '', password: '', phone: '' })
  let navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    Axios.post('http://localhost:3002/user/saveUser',
      userForm,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((resp) => {
        console.log(resp);
        navigate('/login');
      }).catch(error => {
        console.error(error);
      });
  }

  const onChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value })
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

                      <h3 className="mb-5">Sign Up</h3>
                      <form onSubmit={handleSignup}>
                        <div className="form-outline mb-4 row">
                          <div className="col-3">
                            <label htmlFor="email" className="col-form-label">Email:</label>
                          </div>
                          <div className="col-9">
                            <input placeholder="Email" type="email" name="email" className="form-control form-control-lg" value={userForm.email} onChange={onChange} />
                          </div>
                        </div>
                        <div className="form-outline mb-4 row">
                          <div className="col-3">
                            <label htmlFor="username" className="col-form-label">User Name:</label>
                          </div>
                          <div className="col-9">
                            <input placeholder="User Name" type="username" name="username" className="form-control form-control-lg" value={userForm.username} onChange={onChange} />
                          </div>
                        </div>
                        <div className="form-outline mb-4 row">
                          <div className="col-3">
                            <label htmlFor="password" className="col-form-label">Password:</label>
                          </div>
                          <div className="col-9">
                            <input placeholder="Password" type="password" name="password" className="form-control form-control-lg" value={userForm.password} onChange={onChange} />
                          </div>
                        </div>
                        <div className="form-outline mb-4 row">
                          <div className="col-3">
                            <label htmlFor="phone" className="col-form-label">Phone:</label>
                          </div>
                          <div className="col-9">
                            <input placeholder="Phone" type="phone" name="phone" className="form-control form-control-lg" value={userForm.phone} onChange={onChange} />
                          </div>
                        </div>
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Sign Up</button>
                        <a className="nav-link" href="/login">Sign In</a>

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
  )
}

export default SignUp
