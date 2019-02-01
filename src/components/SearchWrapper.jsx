import React, { Component } from 'react';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import './styles/SearchWrapper.css'

class SearchWrapper extends Component {
  render() {
    return(
        <form className="SearchWrapper">
          <SearchButton />
          <SearchInput />
        </form>
    );
  }
}

export default SearchWrapper;