import React from "react";

import MenuItem from "../MenuItem/MenuItem"

import classes from "./MenuItems.module.css"

const MenuItems = (props) => (
    <ul className={classes.general}>
        <MenuItem name="Artikkel" route="/article" icon="TWN"></MenuItem>
        <MenuItem name="Tabel" route="/list" icon="TWN"></MenuItem>
        <MenuItem name="Game of life" route="/life" icon="TWN"></MenuItem>
    </ul>
)

export default MenuItems