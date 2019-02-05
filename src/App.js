import React, { Component } from 'react';
import AuthorsList from './components/AuthorsList';
import SearchInput from './components/SearchInput';
import data from './data/data.json';

import './App.css';

const sortData = data.sort((a, b) => {
    return b.pageviews - a.pageviews;
  });


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sortData,
      term: '',
      color: 'red',
    };
  }

  updateData = (config) => {
    this.setState(config);
  }

  render() {
    const { term, data, color } = this.state;

    return (
      <div className="App">
        <SearchInput 
           term={term} 
           data={sortData}
           update={this.updateData}
            />
        <AuthorsList  
            data={data}
            update={this.updateData}
            style={color}
            />
      </div>
    );
  }
}

export default App;
