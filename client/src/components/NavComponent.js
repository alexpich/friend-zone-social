import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavComponent = () => {
  return (
    <Menu className="navigation" secondary fixed="top">
      <Menu.Item name="home" exact as={NavLink} to="/" />
      <Menu.Item as={NavLink} exact to="/signin" name="signin" />
    </Menu>
  );
};

export default NavComponent;
