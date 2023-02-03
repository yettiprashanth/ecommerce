import React from 'react'
import {Link} from 'react-router-dom'
import Cart_Btn from './Cart_Btn'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Deepu Mart</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fs-bold" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-bold" to="product">PRODUCT</Link>
        </li>
        
        
       
      </ul>
     
    </div>
    <button className='btn btn-outline-primary me-2 btn-sm' ><i className="fa-solid fa-arrow-right-to-bracket me-2"></i><Link to="/Login" >Login</Link></button>
    <button className='btn btn-outline-primary me-2 btn-sm'><i className="fas fa-user me-2"></i><Link to="/Register" >Register</Link></button>
    <Cart_Btn/>
      </div>
     
</nav>

    </>
  )
}

export default Navbar