import React, { Component } from "react";
import axios from 'axios';

import { TableRow } from "../Tablerow/TableRow";

import classes from './Table.module.css'


class Table extends Component {

  state = {
    data: null
  }

  componentDidMount() {
    axios.get('https://midaiganes.irw.ee/api/list', {}, { params: { limit: '500' } }
    ).then((res) => {
      this.setState({ data: res.data.list })
    })

  }



  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Eesnimi</th>
              <th>Perekonnanimi</th>
              <th>Sugu</th>
              <th>Sünnikuupev</th>
              <th>Telefon</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, i) => (
              <TableRow data={item[i]} />
            )
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table