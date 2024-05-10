import React, { FC } from "react";
import { Route } from "react-router-dom";

// pages
import HomePage from "../pages/home/home";
import ProductsPage from "../pages/products/products";
import ProductPage from "../pages/product/product";
import {PROD_URL} from "../config";

const MainRouter: FC = () => (
  <>
    <Route exact path={`${PROD_URL}`} component={HomePage} />
    <Route path={`${PROD_URL}/products`} component={ProductsPage} />
    <Route path={`${PROD_URL}/product/:id`} component={ProductPage} />
  </>
);

export default MainRouter;
