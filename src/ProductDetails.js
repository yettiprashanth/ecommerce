import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import './ProductDetails.css'



function ProductDetails() {
    const {id}=useParams()
    const dispatch=useDispatch()
    const {product}=useSelector(state=>state.productReducer)
    // console.log(product);
   useEffect(()=>{
    dispatch({type:'PRODUCT',id})
   },[id]) 
   const [quantity,setquantity]=useState(1)
   const decQuantity=()=>{
    if(quantity>1){
      setquantity(quantity-1)
    }
   }
  return (
    <>
     <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text-center d-flex justify-content-center" id="exampleModalLabel">Cart1 Info</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <h6 className='text-center' style={{color:"green"}}>Your Product Is Succussfull Place In A Cart See In Cart</h6>
       <h4 className='text-center' style={{color:"green"}}>Thank You For Order </h4>
       <p className="text-center" style={{color:"green"}}>Visit Again</p>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div> 
    <h1 className='text-center'>Product Details</h1>
   
    <div className="container">
    <hr />
    <div className="row">
    <div className="col-md-6">
    <div className="img-details">
    <img src={product.image} alt="" />
    </div>
    
    </div>
    <div className="col-md-6 col-sm-6 col-12">
    <h1 className="text-center mt-3">{product.title}</h1>
    <div className="price">
    <p className="text-center ">Rs:  {product.discountPrice}</p>
    <p className="text-center d-flex descount">Rs:<del>{product.price}</del></p>
    </div>
    
    
    
    <div className="details_info mt-3 mr-5">
    <div className="details_incDec jusstify-content-center mt-3 mr-5">
    <span className="dec " onClick={decQuantity}><i className="fa-solid fa-minus"></i></span>
    <span className="quandity ms-2 me-2">{quantity}</span>
    <span className="inc" onClick={()=>setquantity(quantity+1)}><i className="fa-solid fa-plus ms-2"></i></span>
     
    <button className='btn btn-outline-warning ms-3 w-50'  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>dispatch({type:'ADD_TO_CART',payload:{product,quantity}})}>Add To Cart</button>
    </div>
    <h6 className='text-center mt-2'>Add This Product In Cart Plese Click On Add To Cart</h6>
    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sequi. Ratione accusantium eaque accusamus quibusdam asperiores delectus, quod vitae a quaerat, corporis exercitationem facilis cumque modi eligendi commodi, laboriosam obcaecati.</p>
    </div>
    </div>
    
    </div>
    </div>
    </>
  )
}

export default ProductDetails