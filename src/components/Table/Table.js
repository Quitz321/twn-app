import React, { Component } from "react";
import axios from 'axios';

import TableRow from "../TableRow/TableRow";

import classes from './Table.module.css'


class Table extends Component {

  state = {
    data: null,
    page: 1
  }

  componentDidMount() {
    axios.get('https://midaiganes.irw.ee/api/list', {}, { params: { limit: '500' } }
    ).then((res) => {
      this.setState({ data: res.data.list })
    })

  }



  render() {
    let rows;
    if (this.state.data) {
      rows = this.state.data?.map((item, i) => (
        <TableRow key={i} data={item} />
      ),
      )
    }
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
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table