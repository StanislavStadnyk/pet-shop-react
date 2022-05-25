import PropTypes from "prop-types";

export type TProduct = {
  title: string;
  id: number;
  img?: string;
  price: number;
  weight?: number;
  counter: number;
  onClick: (id: number) => void;
};

export const PTProduct = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string,
  price: PropTypes.number.isRequired,
  weight: PropTypes.number,
  counter: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
