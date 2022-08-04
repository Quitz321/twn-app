import React from "react";

import classes from "./MenuItem.module.css";

const MenuItem = (props) => (
    <li className={classes.general}>
        <a href={props.route}>
            {props.name}
            <img src={props.icon} width="17" height="20" class={classes.image}></img>
        </a>
    </li>
    
)

export default MenuItem