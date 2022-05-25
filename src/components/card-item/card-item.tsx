import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

import imgPlaceholder from "../../images/placeholder.png";

// types
import { PTProduct, TProduct } from "../../types/product.type";

// styles
import "./card-item.scss";

type TProps = TProduct & {
  to: string;
  type?: "cart";
};

const CardItem: FC<TProps> = ({
  id,
  to,
  img,
  title,
  price,
  weight,
  counter,
  onClick,
  type,
}) => {
  const isCart = type === "cart";
  const cls = isCart ? `card-item card-item--${type}` : "card-item";

  return (
    <div className={cls}>
      <Link to={to}>
        <div className="card-item__img">
          <figure className="card-item__img-figure">
            <img src={imgPlaceholder} alt={title || "some description"} />
          </figure>
        </div>
      </Link>
      <div className="card-item__content">
        {title && (
          <Link to={to}>
            <h3 className="card-item__title">{title}</h3>
          </Link>
        )}
        <div className="card-item__info">
          <strong className="card-item__price">{`$${price}`}</strong>
          {weight && (
            <strong className="card-item__weight">{` / ${weight}g`}</strong>
          )}
          {counter && counter > 0 && <span>x{counter}</span>}
        </div>

        {!isCart && (
          <div className="card-item__button-holder">
            <Button color="primary" size="sm" onClick={() => onClick(id)}>
              Add to cart
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

CardItem.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["cart"]),
  ...PTProduct,
};

export default CardItem;
