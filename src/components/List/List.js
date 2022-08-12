import React from "react";

import Table from '../Table/Table'

import classes from './List.module.css';

const List = (props) => {








  return (
    <div className={classes.wrapper}>
      <div>
        <h1 className={classes.title}>nimekiri</h1>
      </div>
      <div className={classes.table}>
        <Table></Table>
      </div>

    </div>
  )
}

export default List