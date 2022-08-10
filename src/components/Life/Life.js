import React, { Component } from 'react';

import ProgressBar from '../ProgressBar/ProgressBar';
import Select from '../Select/Select';
import classes from "./Life.module.css"

class Life extends Component {

  state = {
    width: 80,
    height: 50,
    speed: "Normal",
    initial: 50,
    alive: null,
    running: false,
    grid: null,
    updateGrid: false
  }

  positions = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
  ]

  createValues(start, amount) {
    return Array(amount).fill(0).map((e, i) => (i * start) + 10)
  }


  createGrid = () => {
    const rows = [];
    for (let i = 0; i < this.state.width; i++) {
      rows.push(Array.from(Array(this.state.height), () => (Math.random() > parseInt(this.state.initial) / 100 ? 1 : 0)));
    }
    return ({
      grid: rows,
      alive: this.progress(rows)
    })

  }

  count = (accumulator, curr) => accumulator + curr;

  componentDidMount() {
    const init = this.createGrid();
    this.setState({ ...init })
  }

  changeGame(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = {}
    formData.forEach((value, key) => (formDataObj[key] = (key === "width" || key === "height") ? parseInt(value) : value));
    this.setState({ ...formDataObj, updateGrid: true })
  }

  progress(grid) {
    let sum = 0
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        sum += grid[i][j];
      }
    }
    const max = this.state.width * this.state.height
    return (sum / max * 100).toFixed(2)
  }

  setRunning(e) {
    e.preventDefault();
    if (this.state.running) {
      this.setState({ running: false })
    }
    else {
      this.setState({ running: true })
      this.runGame()
    }
  }

  runGame() {
    const currState = this.state
    if (currState.running) {
      let gridCopy = JSON.parse(JSON.stringify(currState.grid));
      for (let i = 0; i < currState.height; i++) {
        for (let j = 0; j < currState.width; j++) {
          let neighbors = 0;

          this.positions.forEach(([x, y]) => {
            const newI = i + x;
            const newJ = j + y;

            if (newI >= 0 && newI < currState.height && newJ >= 0 && newJ < currState.width) {
              neighbors += currState.grid[newI][newJ];
            }
          });

          if (neighbors < 2 || neighbors > 3) {
            gridCopy[i][j] = 0;
          } else if (currState.grid[i][j] === 0 && neighbors === 3) {
            gridCopy[i][j] = 1;
          }
        }
      }
      setTimeout(() => {
        if (currState === this.state) {
          this.setState({ grid: gridCopy, alive: this.progress(gridCopy) })
        } else { return }
      }, 150);
    }
    else { return }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.updateGrid === true) {
      const updatedGrid = this.createGrid()
      this.setState({ ...updatedGrid, updateGrid: false })
    }
    else if (this.state.grid !== prevState.grid || this.state.running) {
      this.runGame()
    }

  }

  render() {
    let gridElement = null
    gridElement = (<div className={classes.grid} style={{ gridTemplateColumns: `repeat(${parseInt(this.state.width)}, 12.5px)` }}>
      {this.state.grid?.map((rows, i) =>
        rows.map((col, k) => (
          <div key={this.state.grid[i][k].index} className={classes.cell}
            style={{
              backgroundColor: this.state.grid[i][k] ? "#FFF" : "#adf0d028",
            }}
          />
        ))
      ) || "Not loaded yet"}
    </div>)


    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>CONWAYS GAME OF LIFE</h1>
        <form onSubmit={(e) => { this.changeGame(e) }}>
          <div className={classes.inputDiv}>
            <Select label="Grid width" name="width" values={this.createValues(10, 8)} value={this.state.width} />
          </div>
          <div className={classes.inputDiv}>
            <Select label="Grid height" name="height" values={this.createValues(10, 5)} value={this.state.height} />
          </div>
          <div className={classes.inputDiv}>
            <Select label="Speed" name="speed" values={[20, 30, 40]} />
          </div>
          <div className={classes.inputDiv}>
            <Select label="Initial life probability" name="initial" values={this.createValues(10, 10)} value={this.state.initial} />
          </div>
          <div className={classes.buttonDiv}>
            <button onClick={(e) => this.setRunning(e)}>{this.state.running ? "pause" : "start"}</button>
          </div>
          <div className={classes.buttonDiv}>
            <button>apply</button>
          </div>
        </form>
        <ProgressBar alive={this.state.alive + "%"} />
        {gridElement}
      </div>
    )
  }

}

export default Life