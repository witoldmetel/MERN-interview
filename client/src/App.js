import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <TodoList />
      </div>
    );
  }
}

export default App;
