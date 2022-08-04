import React from 'react';

import MenuItems from "../../components/MenuItems/MenuItems"

import classes from "./Menu.module.css";

const Menu = (props) => (
  <div className={classes.general}>
    <img className={classes.logo} src="logo.svg" alt="logo" aria-label="TWN logo"></img>
    <MenuItems></MenuItems>
  </div>
)

export default Menu;