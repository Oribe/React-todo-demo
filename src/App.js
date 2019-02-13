import React, { Component } from 'react';
import Index from './components/Index'
import './style/app.css'
import 'todomvc-app-css/index.css'
import 'todomvc-common/base.js'
import PageFooter from './components/PageFonter'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Index></Index>
        <PageFooter></PageFooter>
      </div>
    );
  }
}

export default App;
