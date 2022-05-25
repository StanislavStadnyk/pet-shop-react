import React, { FC } from "react";
import { Route } from "react-router-dom";

// pages
import HomePage from "../pages/home/home";
import ProductsPage from "../pages/products/products";
import ProductPage from "../pages/product/product";

const MainRouter: FC = () => (
  <>
    <Route exact path="/" component={HomePage} />
    <Route path="/products" component={ProductsPage} />
    <Route path="/product/:id" component={ProductPage} />
  </>
);

export default MainRouter;
