import React, { Component, Suspense } from "react";
import axios from "axios";

import classes from "./Article.module.css"

class Article extends Component {

  state = {
    id: '972d2b8a',
    data: null,
    render: false

  }

  componentDidMount () {
    const data = axios.get('https://midaiganes.irw.ee/api/list/' + this.state.id).then((res) => {
      this.setState({data: res.data, render: true})
    })
    

  }

  render() {
    let title, intro, image, body, elements, tags
    if (this.state.data) {
     ({title, intro, image, body, tags} = this.state.data)
    }
    if (this.state.render) {
      elements = (
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h1>{title}</h1>
        </div>
        <div>
          <div className={classes.intro} dangerouslySetInnerHTML={{ __html: intro }}></div>
        </div>
        <div className={classes.imageWrapper}>
          <div className={classes.blur}>
            <img className={classes.background-image} src={image.large} height="400" width="100%"></img>
          </div>
          <img className={classes.image} src={image.small} height="400px" width="600px" alt={image.alt} title={image.title}></img>
        </div>
        <div className={classes.body} dangerouslySetInnerHTML={{ __html: body }}>
        </div>
        <div className={classes.tagWrapper}>{tags.map((tag) => (
          <div key={tag} className={classes.tag}>{tag}</div>
        ))}</div>
      </div>
      )
    } else {elements = (<div>LOADING</div>)}

    return (
      <div>
        {elements}
      </div>
      
    )
  }
}

export default Article