import React, { Component } from 'react';

import Menu from "../components/Menu/Menu"
import Content from "../components/Content/Content"

import classes from './Layout.module.css';

class Layout extends Component {

  render() {
    return (
      <div id="Layout" className={classes.gridContainer}>
        <Menu></Menu>
        <Content></Content>
      </div>
    )
  }

}

export default Layout;
