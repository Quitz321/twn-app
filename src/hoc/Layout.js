import React from 'react';

import Menu from "../components/Menu/Menu"
import Content from "../components/Content/Content"

import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <div id="Layout" className={classes.gridContainer}>
      <Menu></Menu>
      <Content content={props.content} />
    </div>
  )

}

export default Layout;
