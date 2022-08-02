import React, { Component } from 'react';

import Menu from "../containers/Menu/Menu"
import Content from "../containers/Content/Content"

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
