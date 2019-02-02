import React, { Component } from 'react';
import SearchWrapper from './components/SearchWrapper';
import AuthorsList from './components/AuthorsList';
import data from './data/data.json';

import './App.css';

const sortData = data.sort((a, b) => {
    return b.count_pub - a.count_pub;
  });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sortData,
      term: '',
    }
  }

  render() {
    console.log(sortData);
    return (
      <div className="App">
        <SearchWrapper />
        <AuthorsList data={this.state.data}/>
      </div>
    );
  }
}

export default App;
