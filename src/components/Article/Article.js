import React from "react";

import classes from "./Article.module.css"

const Article = (props) => (
  <div>
    <div className={classes.title}>
      <h1>PEALKIRI</h1>
    </div>
    <div className={classes.image}>
      PILT
    </div>
    <div className={classes.content}>
      SISU
    </div>
  </div>
)

export default Article