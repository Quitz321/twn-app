import React, { Component } from "react";
import axios from 'axios';

import TableRow from "../TableRow/TableRow";

import classes from './Table.module.css'


class Table extends Component {

  state = {
    data: null,
    page: 1,
    currentSort: 'default',
    currElement: null,
    selected: null
  }

  select(e) {
      this.setState({ selected: e.target.id })
  }

  unSelect  = () => {
    this.setState({ selected: null})
  }

  naviPage(e) {
    const input = parseInt(e.target.id)
    const { page } = this.state
    if (page + input > 0 && page + input <= Math.floor(this.state.data.length / 10) + 1) {
      this.setState({ page: page + input })
    }
  }
  setPage(e) {
    e.preventDefault();
    const input = parseInt(e.target.id)
    this.setState({ page: input })
  }

  sortElement = () => {
    const { currElement } = this.state
    let sortTypes
    if (currElement) {
      if (currElement.id === "personal_code") {
        const cutoff = (new Date()).getFullYear() - 2000
        const getString = (eInt) => {
          const e = eInt.toString()
          const year = e.substring(1, 3)
          const y = year > cutoff ? '19' : '20'
          return y + e.substring(1, 7)
        }
        sortTypes = {
          up: {
            fn: (a, b) => getString(b[currElement.id]).localeCompare(getString(a[currElement.id]))
          },
          down: {
            fn: (a, b) => getString(a[currElement.id]).localeCompare(getString(b[currElement.id]))
          },
          default: {
            fn: (a, b) => a
          }
        }
      }
      if (currElement.id !== "personal_code") {
        sortTypes = {
          up: {
            fn: (a, b) => b[currElement.id].localeCompare(a[currElement.id])
          },
          down: {
            fn: (a, b) => a[currElement.id].localeCompare(b[currElement.id])
          },
          default: {
            fn: (a, b) => a
          }
        }
      }

    }
    else {

      sortTypes = {
        default: {
          fn: (a, b) => a
        }
      }
    }

    return sortTypes;
  }



  onSortChange = (e) => {
    const { currentSort } = this.state;
    let nextSort;
    if (this.state.currElement === e.target) {
      if (currentSort === 'down') nextSort = 'up';
      else if (currentSort === 'up') nextSort = 'default';
      else if (currentSort === 'default') nextSort = 'down';
    }
    else {
      nextSort = 'down'
    }

    this.setState({
      currentSort: nextSort, currElement: e.target
    });
  };

  componentDidMount() {
    axios.get('https://midaiganes.irw.ee/api/list', {}, { params: { limit: '500' } }
    ).then((res) => {
      this.setState({ data: res.data.list })
    })

  }



  render() {
    const getIcon = (element) => {
      if (this.state.currElement) {
        return this.state.currElement.id === element ? ("sort-" + this.state.currentSort + ".svg") : "sort-default.svg"
      } else { return "sort-default.svg" }

    }
    let rows;
    let pages = []
    let pageNumbers = 0;
    if (this.state.data) {
      const { data } = this.state

      pageNumbers = () => {
        return data.length % 10 === 0 ? data.length / 10 : Math.floor(data.length / 10) + 1
      }
      for (let i = 0; i < pageNumbers(); i++) {
        const style = this.state.page === i + 1 ? { backgroundColor: "#FFF", color: "#333" } : {};
        pages[i] = (<button key={i + 1} id={i + 1} className={classes.pageBtn} style={style} onClick={(e) => (this.setPage(e))}>{i + 1}</button>)
      }

      const start = (this.state.page - 1) * 10
      rows = [...data].sort(this.sortElement()[this.state.currentSort].fn).map((item, i) => {
        if (i >= start && (i < start+10 && i < data.length)){
          return (<TableRow id={item.id} onClick={(e) => this.select(e)} unSelect={this.unSelect} key={i} data={item} selected={this.state.selected} />)
        }
        
      },
      )
    }
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th id="firstname" onClick={(e) => this.onSortChange(e)}>Eesnimi<img alt="sorting icon" className={classes.sortIcon} src={getIcon("firstname")}></img></th>
              <th id="surname" onClick={(e) => this.onSortChange(e)}>Perekonnanimi<img alt="sorting icon" className={classes.sortIcon} src={getIcon("surname")}></img></th>
              <th id="sex" onClick={(e) => this.onSortChange(e)}>Sugu<img alt="sorting icon" className={classes.sortIcon} src={getIcon("sex")}></img></th>
              <th id="personal_code" onClick={(e) => this.onSortChange(e)}>Sünnikuupev<img alt="sorting icon" className={classes.sortIcon} src={getIcon("personal_code")}></img></th>
              <th>Telefon</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        <div className={classes.pages}>
          <button id={-1} className={classes.pageBtn} onClick={(e) => (this.naviPage(e))}>{"<"}</button>
          {pages}
          <button id={1} className={classes.pageBtn} onClick={(e) => (this.naviPage(e))}>{">"}</button>
        </div>
      </div>
    )
  }
}

export default Table