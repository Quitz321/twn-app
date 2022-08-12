import React from "react";

const TableRow = (props) => {


  return (
    <div> {props.data.map((item, i) => (
      <tr>
        <td>{item[i].firstname}</td>
        <td>{item[i].surname}</td>
        <td>{item[i].sex}</td>
        <td>{item[i].date}</td>
        <td>{item[i].phone}</td>
      </tr>
    ))}
    </div>)
}

export default TableRow;