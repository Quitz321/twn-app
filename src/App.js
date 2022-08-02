import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>

        </Layout>
      </div>
    )
  }
}

export default App;
