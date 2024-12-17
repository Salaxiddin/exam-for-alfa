import { combineReducers ,createStore } from "redux";
import ProductsReducer from "./ProductsReducer";

const store = createStore(combineReducers({
    products: ProductsReducer,
}));    

export default store;