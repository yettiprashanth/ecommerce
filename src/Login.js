import React from 'react'
import './App.css';

function Login() {
  return (
    <div>
       <section className='login'>
    <div className="container py-5 ">
    <div className="row py-5 ms-5 justify-content-end">
    <div className="col-md-6">
    <form>
  <div className="mb-3">
  <button className="btn btn-primary w-100 mb-4"><i className="fa-brands fa-facebook-f me-3"></i>Sign With Face Book</button>
  <button className="btn btn-primary w-100 mb-4"><i className="fa-brands fa-google me-3"></i>Sign with google</button>
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary w-100">Submit</button>
</form>
    </div>
    </div>
    </div>
    </section>
    </div>
  )
}

export default Login
