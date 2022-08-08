import React from "react";

import classes from "./ProgressBar.module.css"

const ProgressBar = (props) => {


  return (
    <div className={classes.wrapper}>
      <div className={classes.alive} style={{ width: `${props.alive}` }}><p className={classes.text}>{props.alive}</p></div>
    </div>
  )
}

export default ProgressBar