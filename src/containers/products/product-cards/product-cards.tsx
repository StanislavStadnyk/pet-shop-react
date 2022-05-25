import React, { useContext } from "react";
import { Col, Row } from "reactstrap";

// components
import ProductCard from "./product-card/product-card";

// types
import { TProduct } from "../../../types/product.type";

// context
import { ShopContext } from "../../../app";

// actions
import { addToCartAction } from "../../../actions/products";

const ProductCards = () => {
  const { state, dispatch } = useContext(ShopContext);
  const { products } = state;

  const addToCart = (id: number) => {
    addToCartAction(dispatch, id);
  };

  const productList = products.map(
    ({ id, img, title, price, weight, counter }: TProduct, index: number) => (
      <Col md={4} xl={3} key={id + index}>
        <ProductCard
          id={id}
          img={img}
          title={title}
          price={price}
          weight={weight}
          counter={counter}
          onClick={() => addToCart(id)}
        />
      </Col>
    )
  );

  return (
    <div className="product-cards">
      <Row>{productList}</Row>
    </div>
  );
};

export default ProductCards;
