import { ProductsData } from "../../Data/products";

interface CartSate {
  cart: ProductsData[];
}

const initialSate: CartSate = {
  cart: [],
};

interface cartAction {
  type: string;
  payload: ProductsData;
}

export function cartReduce(state = initialSate, action: cartAction) {
  switch (action.type) {
    case "cart/add-product":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "cart/remove-product":
      const productToRemove = action.payload;
      const newFiltreCard = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );

      return {
        ...state,
        cart: newFiltreCard,
      };
    default:
      return state;
  }
}
