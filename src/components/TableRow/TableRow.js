import React from "react";

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
    <tr>
      <td key="firstname">{props.data.firstname}</td>
      <td key="surname">{props.data.surname}</td>
      <td key="sex">{props.data.sex === "m" ? "Mees" : "Naine"}</td>
      <td key="date">{getBorn(props.data.personal_code)}</td>
      <td key="phone">{props.data.phone}</td>
    </tr>
  )
}

export default TableRow