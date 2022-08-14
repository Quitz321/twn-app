import React from "react";
import { Link } from "react-router-dom";

import classes from "./MenuItem.module.css";

const MenuItem = (props) => (
  <li className={classes.general}>
    <Link to={props.route} className={classes.item}>
      {props.name}
      <img src={props.icon} width="17" height="20" className={classes.image} alt={props.name}></img>
    </Link>
  </li>

)

export default MenuItem