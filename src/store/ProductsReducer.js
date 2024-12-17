const initialState = [];

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductsReducerMethods.INIT:
      if (action.payload) {
        state = [...state, ...action.payload];
      }
      return state;
    case ProductsReducerMethods.GET_All:
      return state;
    default:
      return state;
  }
};

export default ProductsReducer;

export const ProductsReducerMethods = {
  INIT: "INIT",
  GET_All: "GET_ALL",
  SET_PRODUCT: "SET_PRODUCT",
};
