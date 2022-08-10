import React from "react";

import classes from './Select.module.css'

const Select = (props) => {

  let optionlist = props.values.map((value, i) => {
    let text = value
    if (props.name === "initial") {
      text += "%"
    }
    return (
      <option key={i} value={value}>{text}</option>
    )
  })

  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <select id={props.name} name={props.name} defaultValue={props.value}>
        {optionlist}
      </select>
    </div>

  )
}

export default Select;