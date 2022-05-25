import React from "react";
import { faCarRear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// constants
import { ROUTES } from "../../constants/constants";

// styles
import "./logo.scss";

const Logo = () => (
  <Link className="logo" to={ROUTES.HOME}>
    <FontAwesomeIcon icon={faCarRear} />
  </Link>
);

export default Logo;
