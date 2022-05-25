import React from "react";

// components
import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";

// styles
import "./sidebar.scss";

const Sidebar = () => (
  <aside className="sidebar">
    <Logo />
    <Navigation />
  </aside>
);

export default Sidebar;
