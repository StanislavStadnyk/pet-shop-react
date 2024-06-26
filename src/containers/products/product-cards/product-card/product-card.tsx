import React, { FC } from "react";

// types
import { PTProduct, TProduct } from "../../../../types/product.type";

// constants
import { ROUTES } from "../../../../constants/constants";

// components
import CardItem from "../../../../components/card-item/card-item";
import {PROD_URL} from "../../../../config";

const ProductCard: FC<TProduct> = ({
  id,
  img,
  title,
  price,
  weight,
  counter,
  onClick,
}) => (
  <CardItem
    to={`${PROD_URL}${ROUTES.PRODUCT}/${id}`}
    id={id}
    title={title}
    img={img}
    price={price}
    weight={weight}
    counter={counter}
    onClick={onClick}
  />
);

ProductCard.propTypes = PTProduct;

export default ProductCard;
