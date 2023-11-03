import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    Axios.post(`http://localhost:3002/user/login`, { ...credentials })
      .then(response => {
        console.log(response); // handle success response from server
        localStorage.setItem('matrimonial_auth_token', response.data.token);
        localStorage.setItem('username', credentials.username);
        setTimeout(() => {
          navigate("/");
          //window.location.reload(true);
        }, 1000);
      })
      .catch(error => {
        console.log(error); // handle error response from server
      });
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>

      <div className="container-fluid">
        <div className="row">

          <section className="vh-100" >
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card shadow-2-strong" style={{ borderRadius: '1rem', backgroundColor: '#508bfc' }}>
                    <div className="card-body p-5 text-center">

                      <h3 className="mb-5">Sign in</h3>
                      <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4">
                          <input placeholder="User Name" type="username" name="username" id="username" className="form-control form-control-lg" value={credentials.username} onChange={onChange} />
                          <label className="form-label" htmlFor="typeEmailX-2">User Name</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input placeholder="Password" type="password" name="password" id="password" className="form-control form-control-lg" value={credentials.password} onChange={onChange} />
                          <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                        </div>

                        <div className="form-check d-flex justify-content-start mb-4">
                          <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                          <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                        </div>

                        <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                        <a className="nav-link" href="/register">Sign Up</a>
                       
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

export default Login
