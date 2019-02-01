import React, { Component } from 'react';
import './styles/SearchInput.css';

class SearchInput extends Component {
  render() {
    return(
      <span className="SearchInput">
        <input 
          className="Input"
          type="text"
          placeholder="Поиск авторов по имени"
        />
      </span>
    );
  }
}

export default SearchInput;