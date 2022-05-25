import { TProduct } from "../types/product.type";

export const initialStateProducts = {
  products: [],
  categories: [],
  cart: [],
  isLoading: false,
};

export type TShopState = {
  total: number;
  products: TProduct[];
  categories: any[];
  cart: TProduct[];
  isLoading: boolean;
};

const shopReducer = (state: TShopState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case "START_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "END_LOADING":
      return {
        ...state,
        isLoading: false,
      };

    case "FETCH_DATA":
      return {
        ...state,
        products: payload.products,
        categories: payload.categories,
      };

    case "ADD_TO_CART":
      const { products, cart } = state;
      const cartItem = products.find((product) => product.id === payload);
      const cartItemIndex =
        cartItem && cart?.findIndex((item) => item.id === cartItem.id);

      // @ts-ignore
      if (cartItemIndex >= 0) {
        const updatedCart = cart.map((item, index) => {
          return index === cartItemIndex
            ? { ...item, counter: item.counter + 1 }
            : item;
        });

        return {
          ...state,
          cart: updatedCart,
        };
      }

      return {
        ...state,
        cart: [...state.cart, cartItem],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: payload.products,
      };

    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default shopReducer;
