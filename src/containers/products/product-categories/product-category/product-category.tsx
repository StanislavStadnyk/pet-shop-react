import React, { FC } from "react";
import PropTypes from "prop-types";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// types
import { TCategory } from "../../../../types/category.type";

// styles
import "./product-category.scss";

const ProductCategory: FC<TCategory> = ({ id, name, items }) => (
  <div className="product-category">
    <div className="product-category__holder">
      <div className="product-category__icon">
        <FontAwesomeIcon icon={faAnchor} />
      </div>
      <div className="product-category__text">
        <strong className="product-category__name">{name}</strong>
        <span className="product-category__items">{items} items</span>
      </div>
    </div>
  </div>
);

ProductCategory.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
};

export default ProductCategory;
