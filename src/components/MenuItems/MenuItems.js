import React from "react";

import MenuItem from "../MenuItem/MenuItem"

import classes from "./MenuItems.module.css"

const MenuItems = (props) => (
    <ul className={classes.general}>
        <MenuItem name="Artikkel" route="/article" icon="file-solid.svg"></MenuItem>
        <MenuItem name="Tabel" route="/list" icon="table-solid.svg"></MenuItem>
        <MenuItem name="Game of life" route="/life" icon="image-solid.svg"></MenuItem>
    </ul>
)

export default MenuItems