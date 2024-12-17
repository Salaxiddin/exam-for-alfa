import { ProductsReducerMethods } from "../store/ProductsReducer";

class ProductsServise {
  static async getProducts() {
    return await fetch("https://products-server-g665.onrender.com/api", {
      method: "GET",
    }).then((response) => response.json());
  }
  static async addProducts({ title, description, image, dispatch }) {
    await fetch("https://products-server-g665.onrender.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, image }),
    })
      .then((response) => response.json())
      .then((res) => {
        dispatch({ type: ProductsReducerMethods.INIT, payload: [res] });
      });
  }
}

export default ProductsServise;
