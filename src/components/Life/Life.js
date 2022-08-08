import React, { Component } from 'react';

import ProgressBar from '../ProgressBar/ProgressBar';
import classes from "./Life.module.css"

class Life extends Component {

  state = {
    width: 40,
    height: 40,
    speed: "Normal",
    initial: 50,
    alive: null,
    status: "pause",
    grid: null
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

  createGrid = () => {
    const rows = [];
    for (let i = 0; i < this.state.width; i++) {
      rows.push(Array.from(Array(this.state.height), () => (Math.random() > this.state.initial / 100 ? 1 : 0)));
    }
    this.setState({ grid: rows, alive: this.progress(rows) });

  }

  count = (accumulator, curr) => accumulator + curr;

  componentDidMount() {
    this.createGrid();
    setInterval(() => {
      this.runGame()
    }, 3000);


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

  runGame() {
    let gridCopy = JSON.parse(JSON.stringify(this.state.grid));
    for (let i = 0; i < this.state.height; i++) {
      for (let j = 0; j < this.state.width; j++) {
        let neighbors = 0;

        this.positions.forEach(([x, y]) => {
          const newI = i + x;
          const newJ = j + y;

          if (newI >= 0 && newI < this.state.height && newJ >= 0 && newJ < this.state.width) {
            neighbors += this.state.grid[newI][newJ];
          }
        });

        if (neighbors < 2 || neighbors > 3) {
          gridCopy[i][j] = 0;
        } else if (this.state.grid[i][j] === 0 && neighbors === 3) {
          gridCopy[i][j] = 1;
        }
      }
    }
    this.setState({ grid: gridCopy, alive: this.progress(gridCopy) });
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>CONWAYS GAME OF LIFE</h1>
        <form>
          <div className={classes.inputDiv}>
            <label for="width">Grid width</label>
            <input type="select" id="width" text={this.state.width}></input>
          </div>
          <div className={classes.inputDiv}>
            <label for="height">Grid height</label>
            <input type="select" id="height" text={this.state.height}></input>
          </div>
          <div className={classes.inputDiv}>
            <label for="speed" >Speed</label>
            <input type="select" id="speed" text={this.state.speed}></input>
          </div>
          <div className={classes.inputDiv}>
            <label for="initial" >Initial life probability</label>
            <input type="select" id="initial" text={this.state.initial + "%"}></input>
          </div>
          <div className={classes.buttonDiv}>
            <button>{this.state.status}</button>
          </div>
          <div className={classes.buttonDiv}>
            <button>apply</button>
          </div>
        </form>
        <ProgressBar alive={this.state.alive + "%"} />
        <div className={classes.grid} style={{ gridTemplateColumns: `repeat(${this.state.width}, 12.5px)` }}>
          {this.state.grid?.map((rows, i) =>
            rows.map((col, k) => (
              <div className={classes.cell}
                style={{
                  backgroundColor: this.state.grid[i][k] ? "#FFF" : "#adf0d028",
                }}
              />
            ))
          ) || "Not loaded yet"}
        </div>
      </div>
    )
  }

}

export default Life