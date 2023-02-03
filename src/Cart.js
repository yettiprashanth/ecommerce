import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

 import './Cart.css'
function Cart() {
    const {products,totalPrice,totalQuantity}=useSelector(state=>state.CartReducer)
    
       const dispatch=useDispatch()
  return (
   <>
   <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div className="modal-dialog">
     <div className="modal-content">
       <div className="modal-header">
         <h1 className="modal-title fs-5 text-center d-flex justify-content-center" id="exampleModalLabel">Cart1 Info</h1>
         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div className="modal-body">
        <h5 className='text-center' style={{color:"red"}}>Your Product Is Succussfull Remove</h5>
        <h4 className='text-center' style={{color:"red"}}>Thank You</h4>
        <p className="text-center" style={{color:"red"}}>Visit Again</p>
       </div>
       {/* <div className="modal-footer">
         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="button" className="btn btn-primary">Save changes</button>
       </div> */}
     </div>
   </div>
 </div> 
   <div className="container ">
   <h3 className="text-center">Cart Items</h3>
   <hr />
{/* {
   products && products.lenght >  0 ? <div className="row">
   <div className="col-md-9">
     <div className="row">
     <div className="col-md-2">Picture</div>
     <div className="col-md-2">Name</div>
     <div className="col-md-2">Price </div>
     <div className="col-md-2">INC/DEC</div>
     <div className="col-md-2">TOTAL PRICE</div>
     <div className="col-md-2">REMOVE</div>
     </div>
     <hr />
     {
        products.map(product=>(
            <div key={product.id}>
            <div className="row">
            <div className="col-md-2 mt-2" >
            <div className="img-details1 mt-2">
            <img src={product.image} alt="" />
            </div>
            
            </div>
            
            <div className="col-md-2 mt-5">{product.title}</div>
            <div className="col-md-2 mt-5">Rs:{product.discountPrice}</div>
            <div className="col-md-2">
            <div className="cart_incdec mt-5">
            <span className="dec1 " onClick={()=> dispatch({type:"DEC",payload:product.id})}><i className="fa-solid fa-minus"></i></span>
            <span className="quandity1 ms-1 me-1">{product.quantity}</span>
            <span className="inc1" onClick={()=>dispatch({type:'INC',payload:product.id})}><i className="fa-solid fa-plus ms-2"></i></span>
            </div>
            
            </div>
            <div className="col-md-2 mt-5">Rs:{product.discountPrice*product.quantity}</div>
            <div className="col-md-2 icon mt-5 " onClick={()=>dispatch({type:'REMOVE',payload:product.id})}><span className="dec1"><i className="fa-solid fa-trash"></i></span></div>
            </div>
            </div>
            
        ))
     }
   </div>
   <div className="col-md-3">
   <div className="cart_summary">
   <h5 className='text-center'>Summary</h5>
   <hr />
   <div className="row">
   <div className="col-md-6">Total Item:</div>
   <div className="col-md-6">{ totalQuantity}</div>
   </div>
  <div className="row mt-2">
  <div className="col-md-6">Total Price:</div>
  <div className="col-md-6">Rs:{totalPrice}</div>
  </div>
   </div>
   
   </div>
   </div>
   :'your card is empty'
} */}
 <div className="row cart">
   <div className="col-md-9">
     <div className="row">
     <div className="col-md-2">Picture</div>
     <div className="col-md-2">Name</div>
     <div className="col-md-2">Price </div>
     <div className="col-md-2">INC/DEC</div>
     <div className="col-md-2">TOTAL PRICE</div>
     <div className="col-md-2">REMOVE</div>
     </div>
     <hr />
     {
        products.map(product=>(
            <div key={product.id}>
            <div className="row">
            <div className="col-md-2 mt-2" >
            <div className="img-details1 mt-2">
            <img src={product.image} alt="" />
            </div>
            
            </div>
            
            <div className="col-md-2 mt-5">{product.title}</div>
            <div className="col-md-2 mt-5">Rs:{product.discountPrice}</div>
            <div className="col-md-2">
            <div className="cart_incdec mt-5">
            <span className="dec1 " onClick={()=> dispatch({type:"DEC",payload:product.id})}><i className="fa-solid fa-minus"></i></span>
            <span className="quandity1 ms-1 me-1">{product.quantity}</span>
            <span className="inc1" onClick={()=>dispatch({type:'INC',payload:product.id})}><i className="fa-solid fa-plus ms-2"></i></span>
            </div>
            
            </div>
            <div className="col-md-2 mt-5">Rs:{product.discountPrice*product.quantity}</div>
            <div className="col-md-2 icon mt-5 "  data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={()=>dispatch({type:'REMOVE',payload:product.id})}><span className="dec1"><i className="fa-solid fa-trash"></i></span></div>
            </div>
            </div>
            
        ))
     }
   </div>
   <div className="col-md-3">
   <div className="cart_summary">
   <h5 className='text-center'>Summary</h5>
   <hr />
   <div className="row">
   <div className="col-md-6">Total Item:</div>
   <div className="col-md-6">{ totalQuantity}</div>
   </div>
  <div className="row mt-2">
  <div className="col-md-6">Total Price:</div>
  <div className="col-md-6">Rs:{totalPrice}</div>
  </div>
   </div>
   
   </div>
   </div> 
   
    
   
   
   
    

     </div>
    
    
   
    
    
   
  
  
 
  </>
  )
}

export default Cart