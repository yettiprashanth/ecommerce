const initstate={
    products:[],
    totalPrice:0,
    totalQuantity:0
}

const CartReducer=(state=initstate,action)=>{
    let findPro;
    let index;
   
    switch(action.type){
        case 'ADD_TO_CART':
             // console.log(action.paylad.product.id);
            const {product,quantity}=action.payload;
            const check=state.products.find(pr=>pr.id===product.id);
            if(check){
                return state;
            }
            else{
                const Tprice=state.totalPrice+product.discountPrice*quantity;
                const Tquatity=state.totalQuantity+quantity;
                product.quantity=quantity;
                return{
                    ...state,products:[...state.products,product],totalPrice:Tprice,
                    totalQuantity:Tquatity

                }
            }
            case 'INC':
                findPro=state.products.find(product=>product.id===action.payload)
                index=state.products.findIndex(product=>product.id===action.paylad)

                findPro.quantity+=1;
                state.products[index]=findPro;
                return{
                    ...state,
                    totalPrice:state.totalPrice+findPro.discountPrice,totalQuantity:state.totalQuantity+1
                }
                case 'DEC':
                findPro=state.products.find(product=>product.id===action.payload)
                index=state.products.findIndex(product=>product.id===action.paylad)
                if (findPro.quantity>1){
                    findPro.quantity-=1;
                    state.products[index]=findPro
                    return{
                        ...state,
                        totalPrice:state.totalPrice-findPro.discountPrice,totalQuantity:state.totalQuantity-1
                    }
                }
                else{
                    return state;
                }
                case 'REMOVE':
                    findPro=state.products.find(product=>product.id===action.payload)
                   const filtered=state.products.filter(product=>product.id !== action.payload) 
                   
                   return{
                    ...state,
                    products:filtered,
                    totalPrice:state.totalPrice-findPro.discountPrice*findPro.quantity,totalQuantity:state.totalQuantity-findPro.quantity
                   }

            default:
                 return state;
                }
}
 

export default CartReducer;