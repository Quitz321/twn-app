import React from "react";

import classes from "./MenuItem.module.css";

const MenuItem = (props) => (
    <li className={classes.general}>
        <a href={props.route}>
            {props.name}
            <img src="TW_favicon_32x32.png"></img>
        </a>
    </li>
    
)

export default MenuItem