import React, { useContext } from "react";

import ProductCategory from "./product-category/product-category";

// types
import { TCategory } from "../../../types/category.type";

//styles
import "./product-categories.scss";
import { ShopContext } from "../../../app";

const ProductCategories = () => {
  const { state } = useContext(ShopContext);
  const { categories } = state;

  const categoryItems = categories.map(
    ({ id, name, items }: TCategory, index: number) => (
      <li className="product-categories__list-item" key={id + index}>
        <ProductCategory id={id} name={name} items={items} />
      </li>
    )
  );

  return (
    <nav className="product-categories">
      <ul className="product-categories__list">{categoryItems}</ul>
    </nav>
  );
};

export default ProductCategories;
