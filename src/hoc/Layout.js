import React from 'react';

import Menu from "../components/Menu/Menu"
import Content from "../components/Content/Content"

import classes from './Layout.module.css';
import { useParams } from 'react-router-dom';

const Layout = (props) => {

  const { id } = useParams()
  return (
    <div id="Layout" className={classes.gridContainer}>
      <Menu></Menu>
      <Content content={props.content} id={id} />
    </div>
  )

}

export default Layout;
