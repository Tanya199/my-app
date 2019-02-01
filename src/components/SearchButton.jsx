import React, { Component } from 'react';
import './styles/SearchButton.css';
import search from '../search.svg';

class SearchButton extends Component {
  render() {
    return (
      <button className="SearchButton">
        <img src={search} alt="search"/>
      </button>
    );
  }
}

export default SearchButton;