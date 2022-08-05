import React from 'react';
import parse from 'html-react-parser';

import Article from '../Article/Article';
import List from '../List/List';
import Life from '../Life/Life';

import classes from "./Content.module.css"

const Content = (props) => {

  const defContent = (
    `<h1>trinidad wiseman</h1>
    <p>SPA proovitöö</p>`
  )

  let showContent;
  switch (props.content) {
    case "/":
      showContent = parse(defContent)
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