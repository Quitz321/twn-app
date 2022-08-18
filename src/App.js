import React, { Component } from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Layout from './hoc/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Layout content="/" />}></Route>
            <Route path="/article/:id" element={<Layout content="article" />}></Route>
            <Route path="/list" element={<Layout content="list" />}></Route>
            <Route path="/life" element={<Layout content="life" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
