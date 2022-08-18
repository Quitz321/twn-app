import React from 'react';
import { Link } from "react-router-dom";

import MenuItems from "../../components/MenuItems/MenuItems"

import classes from "./Menu.module.css";

const Menu = (props) => (
  <div className={classes.general}>
    <Link to="/">
      <img className={classes.logo} src="/logo.svg" alt="logo" aria-label="TWN logo"></img>
    </Link>
    <MenuItems></MenuItems>
  </div>
)

export default Menu;