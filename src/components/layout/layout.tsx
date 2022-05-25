import React, { FC } from "react";
import PropTypes from "prop-types";

// components
import Sidebar from "../sidebar/sidebar";

// components
import HeaderPanel from "../header-panel/header-panel";

// styles
import "./layout.scss";

const Layout: FC = ({ children }) => (
  <div className="layout container">
    <a className="skip-to-content-link" href="#main">
      Skip to content
    </a>

    <div className="layout__container">
      <Sidebar />
      <main id="main" className="layout__main-content">
        <HeaderPanel />

        <div className="layout__content">{children}</div>
      </main>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
