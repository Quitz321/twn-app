import React from 'react';

import classes from "./Menu.module.css";

const Menu = (props) => (
  <div className={classes.general}>
    <img className={classes.logo} src="logo.svg" alt="logo" aria-label="TWN logo"></img>
    SIIA TULEB MENÜÜ
  </div>
)

export default Menu;