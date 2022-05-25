import React from "react";

// constants
import { NAVIGATION_LINKS } from "../../constants/constants";

// components
import NavigationLink from "./navigation-link/navigation-link";

// styles
import "./navigation.scss";

const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      {NAVIGATION_LINKS.map(({ icon, text, path }) => (
        <NavigationLink icon={icon} text={text} path={path} key={text + path} />
      ))}
    </ul>
  </nav>
);

export default Navigation;
