import React, { Component } from 'react';
import search from '../search.svg';

import './styles/SearchButton.css';


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