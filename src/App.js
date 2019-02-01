import React, { Component } from 'react';
import SearchWrapper from './components/SearchWrapper';
import AuthorsList from './components/AuthorsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchWrapper />
        <AuthorsList />
      </div>
    );
  }
}

export default App;
