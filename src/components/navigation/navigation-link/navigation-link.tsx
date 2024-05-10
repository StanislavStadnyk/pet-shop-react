import React, { FC } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavLink } from "react-router-dom";

// styles
import "./navigation-links.scss";
import {PROD_URL} from "../../../config";

type TProps = {
  icon: IconProp;
  text: string;
  path: string;
};

const NavigationLink: FC<TProps> = ({ icon, text, path }) => (
  <li className="navigation-link">
    <NavLink
      exact={true}
      to={`${PROD_URL}${path}`}
      className="navigation-link__item"
      aria-label={text}
    >
      <FontAwesomeIcon icon={icon} />
    </NavLink>
  </li>
);

NavigationLink.propTypes = {
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavigationLink;
