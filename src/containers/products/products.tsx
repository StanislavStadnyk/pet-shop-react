import React, { useEffect, useContext } from "react";
import { Spinner } from "reactstrap";

// components
import ProductCategories from "./product-categories/product-categories";

// context
import { ShopContext } from "../../app";

// components
import ProductCart from "./product-cart/product-cart";
import ProductCards from "./product-cards/product-cards";

// helpers
import { fetchData } from "../helpers";

// styles
import "./products.scss";
import {PROD_URL} from "../../config";

const Products = () => {
  // @ts-ignore
  const { state, dispatch } = useContext(ShopContext);
  const { isLoading } = state;

  useEffect(() => {
    fetchData(dispatch, `${PROD_URL}/data.json`);
  }, [dispatch]);

  return (
    <div className="products">
      {isLoading ? (
        <Spinner>Loading...</Spinner>
      ) : (
        <>
          <ProductCategories />
          <div className="products__container">
            <ProductCards />
          </div>
          <ProductCart />
        </>
      )}
    </div>
  );
};

export default Products;
