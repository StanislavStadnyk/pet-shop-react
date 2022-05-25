import { TProduct } from "../types/product.type";

export const addToCartAction = (dispatch: any, id: number) =>
  dispatch({
    type: "ADD_TO_CART",
    payload: id,
  });

export const fetchDataAction = (dispatch: any, data: TProduct[]) =>
  dispatch({
    type: "FETCH_DATA",
    payload: data,
  });
