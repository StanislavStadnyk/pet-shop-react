import React, { FC, useContext, useState } from "react";
import { Button, Collapse } from "reactstrap";

// components
import CardItem from "../../../components/card-item/card-item";

// constants
import { ROUTES } from "../../../constants/constants";

// types
import { TProduct } from "../../../types/product.type";

// context
import { ShopContext } from "../../../app";

// styles
import "./product-cart.scss";
import {PROD_URL} from "../../../config";

const ProductCart: FC = () => {
  const [isOpen, setCollapse] = useState(false);
  const { state } = useContext(ShopContext);
  const { cart } = state;

  const toggleCollapse = () => setCollapse(!isOpen);

  const totalPrice = cart
    ?.reduce((accum: number, currentValue: TProduct) => {
      return accum + currentValue.price * currentValue.counter;
    }, 0)
    .toFixed(2);

  const cartList = cart.map(
    ({ title, id, price, counter }: TProduct, index: number) => (
      <CardItem
        key={id + index + price}
        title={title}
        id={id}
        price={price}
        counter={counter}
        onClick={() => {}}
        to={`${PROD_URL}${ROUTES.PRODUCT}/${id}`}
        type="cart"
      />
    )
  );

  return (
    <div className="product-cart">
      <Button
        className="product-cart__btn-cart"
        color="primary"
        onClick={toggleCollapse}
      >
        Cart is here
      </Button>
      <Collapse className="product-cart__aside" isOpen={isOpen}>
        <Button close onClick={toggleCollapse} />
        <h5>Current order</h5>

        {cart.length ? (
          <>
            <div className="product-cart__list">{cartList}</div>
            <div className="product-cart__bottom">
              <strong className="product-cart__total">
                Total: {totalPrice}
              </strong>
              <Button
                color="primary"
                className="product-cart__btn-print"
                block={true}
              >
                Print Receipt
              </Button>
            </div>
          </>
        ) : (
          "Add something to cart :)"
        )}
      </Collapse>
    </div>
  );
};

export default ProductCart;
