import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
function Cart_Btn() {
  const {totalQuantity}=useSelector(state=>state.CartReducer)
  
  return (
   <>
   <Link to="/Cart" className='btn btn-outline-primary btn-sm'>
   <i className="fa-solid fa-cart-plus me-2 btn-sm"></i>Cart <span>({totalQuantity })</span></Link>
   </>
  )
}

export default Cart_Btn