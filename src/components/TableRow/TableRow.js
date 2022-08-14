import React from "react";

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

  return (
    <tr id={props.id} onClick={props.onClick}>
      <td id={props.id} key="firstname">{props.data.firstname}</td>
      <td id={props.id} key="surname">{props.data.surname}</td>
      <td id={props.id} key="sex">{props.data.sex === "m" ? "Mees" : "Naine"}</td>
      <td id={props.id} key="date">{getBorn(props.data.personal_code)}</td>
      <td id={props.id} key="phone">{props.data.phone}</td>
    </tr>
  )
}

export default TableRow