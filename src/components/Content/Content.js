import React from 'react';
import parse from 'html-react-parser';

import Article from '../Article/Article';
import List from '../List/List';
import Life from '../Life/Life';

import classes from "./Content.module.css"

const Content = (props) => {

  const defContent = (
    <div>
      <h1 className={classes.heading}>trinidad wiseman</h1>
      <p className={classes.para}>SPA proovitöö</p>
    </div>

  )

  let showContent;
  switch (props.content) {
    case "/":
      showContent = defContent
      break;
    case "article":
      showContent = <Article />
      break;
    case "list":
      showContent = <List />
      break;
    case "life":
      showContent = <Life />
      break;
    default:
      showContent = parse(defContent)
      break;
  }
  return (
    <div className={classes.general}>
      <div className={classes.position}>
        {showContent}
      </div>
    </div>
  )

}

export default Content