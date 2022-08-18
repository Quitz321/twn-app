import React from "react";
import { Link } from 'react-router-dom'

import classes from './TableRow.module.css';

const TableRow = (props) => {

  const getBorn = (personal_code) => {
    const code = String(personal_code)
    const year = code.substring(1, 3)
    const month = code.substring(3, 5)
    const day = code.substring(5, 7)

    const cutoff = (new Date()).getFullYear() - 2000

    return (day + '.' + month + '.' + (year > cutoff ? '19' : '20') + year)
  }
  const unSelect = () => {
    props.unSelect()
  }

  const tableRow = () => {
    if (props.selected === props.id) {
      return (
        <tr onClick={unSelect} className={classes.trOpen}>
          <td colSpan="5" className={classes.tdOpen}>

          <div className={classes.datarow}>
            <div>{props.data.firstname}</div>
            <div>{props.data.surname}</div>
            <div>{props.data.sex === "m" ? "Mees" : "Naine"}</div>
            <div>{getBorn(props.data.personal_code)}</div>
            <div>{props.data.phone}</div>
          </div>
          <div>
            <div className={classes.intro}>
              <img className={classes.image} alt={props.data.images.title} src={props.data.image.small} width="200px" height="180px"></img>
              <div className={classes.introSub}>
                <div dangerouslySetInnerHTML={{ __html: props.data.intro }}></div>
                <Link to={{ pathname: "/article/" + props.data.id}}>
                  <button>LOE ROHKEM</button>
                </Link>
              </div>
            </div>
          </div>
          </td>
        </tr>

        
      )
    }
    else {
      return (
        <tr className={classes.row} id={props.id} onClick={props.onClick}>
          <td id={props.id} key="firstname">{props.data.firstname}</td>
          <td id={props.id} key="surname">{props.data.surname}</td>
          <td id={props.id} key="sex">{props.data.sex === "m" ? "Mees" : "Naine"}</td>
          <td id={props.id} key="date">{getBorn(props.data.personal_code)}</td>
          <td id={props.id} key="phone">{props.data.phone}</td>
        </tr>
      )
    }
  }

  return (
    tableRow()
  )
}

export default TableRow