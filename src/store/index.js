import {createStore,combineReducers} from "redux"
import productReducer from "./reducer/productReducer"
import CartReducer from "./reducer/CartReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

const root=combineReducers({
    productReducer
    ,CartReducer
});

const store=createStore(

root,devToolsEnhancer()
);

export default store;