import React from 'react'
import './App.css';
function Register() {
  return (
    <>
    <section className='register'>
    <div className="container py-5 ">
    <div className="row py-5 ms-5 justify-content-center">
    <div className="col-md-6">
    </div>
    <div className="col-md-6">
    <form>
  <div class="mb-3">
  <button class="btn btn-primary w-100 mb-4"><i class="fa-brands fa-facebook-f me-3"></i>Sign Up Face Book</button>
  <button class="btn btn-primary w-100 mb-4"><i class="fa-brands fa-google me-3"></i>Sign Up google</button>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Conform Passward</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary w-100">Submit</button>
</form>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Register