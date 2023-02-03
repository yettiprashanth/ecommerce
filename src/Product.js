import React from 'react'
import {useSelector} from "react-redux"
import {Link} from 'react-router-dom'
import './Product.css'
function Product() {
    const {products}=useSelector(state=>state.productReducer)
    // console.log(products)
  return (
    <div className="container">
    <h1 className="text-center">Products</h1>
    <hr />
    <h3 className='text-center p1'>Plese Click On Image For Image Details</h3>
    <div className="row mt-3">
    {products.map(product=>(
        <div className=" col-md-3 col-sm-6 col-12" key={product.id}>
        <div className="card mt-3 mb-3" >
        <div className=" product_image">
        <Link to={`/productdetails/${product.id}`}>
        <img src={product.image} className="card-img-top" alt={product.title}/>

        </Link>
        </div>
 
  <div className="card-body mt-2">
    <h5 className="card-title text-center">{product.title}</h5>
   
  </div>
  <p className='text-center capitalize'>click on image more details</p>
</div>
        </div>
  ))}
    </div>
    </div>
  )
}

export default Product