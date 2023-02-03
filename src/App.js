
import './App.css';
import { Provider } from 'react-redux';
import {
 BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Product from './Product';
import Navbar from './Navbar';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Login from './Login';
import store from './store'

import Register from './Register';

function App() {
  return (
    
   
    <Router>
      <Provider store={store}>
        <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home />}></Route> 
        
        <Route path="/product" element={<Product />}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
          
        
      
      
      
    </Routes>
    </Provider>
    </Router>
    
    
 

   
  );
}

export default App;
