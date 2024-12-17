import "./App.css";
import React, { useEffect } from "react";
import Header from "./comonents/header/Header";
import AppRouter from "./pages/AppRouter";
import ProductsServise from "./api/ProductsService";
import { ProductsReducerMethods } from "./store/ProductsReducer";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      ProductsServise.getProducts()
        .then((products) => {
          dispatch({ type: ProductsReducerMethods.INIT, payload:products });
        })
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
