import { TProduct } from "../types/product.type";

// actions
import { fetchDataAction } from "../actions/products";
import { endLoadingAction, startLoadingAction } from "../actions/common";

export const fetchData = async (dispatch: any, url: string) => {
  startLoadingAction(dispatch);

  try {
    const res = await fetch(url);
    const dataResponse = await res.json();

    const updatedProducts = dataResponse.products.map((product: TProduct) => ({
      ...product,
      counter: 1,
    }));

    const updatedResponse = {
      ...dataResponse,
      products: updatedProducts,
    };

    fetchDataAction(dispatch, updatedResponse);
  } catch (error) {
    console.log("error", error);
  }

  endLoadingAction(dispatch);
};
