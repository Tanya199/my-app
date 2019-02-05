import React from 'react';
import search from '../search.svg';

import './styles/SearchInput.css';

const SearchInput = ({ term, data, update }) => {
  const dataSearch = (e) => {
    const value = e.target.value.toLowerCase();

    const filter = data.filter(author => {
      return author.name.toLowerCase().includes(value) || !value;

    });

    update({
      data: filter,
      term: value,
    });

  };

  return (
    <span className="SearchInput">
      <img src={search} alt="search" className="SearchIcon" />
      <input
        className="Input"
        type="text"
        placeholder="Поиск авторов по имени"
        value={term}
        onChange={dataSearch}
      />
    </span>
  );
}

export default SearchInput;