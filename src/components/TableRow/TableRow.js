import React from "react";

const TableRow = (props) => {


  return (
    <tr>
      <td key="firstname">{props.data.firstname}</td>
      <td key="surname">{props.data.surname}</td>
      <td key="sex">{props.data.sex}</td>
      <td key="date">{props.data.date}</td>
      <td key="phone">{props.data.phone}</td>
    </tr>
  )
}

export default TableRow;