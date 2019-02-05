import React from 'react';
import AuthorData from './AuthorData';

import './styles/AuthorsList.css';

const AuthorsList = ({ data, update }) => {
  if (!data) {
    return (<p>Loading...</p>);
  }

  const authors = data.map((author, index) => {
    return <AuthorData
      key={index}
      author={author}
      update={update}
    />;
  });

  if (authors.length === 0) {
    return <p>Данных нет</p>
  };

  return (
    <table className="authors-list">
      <tbody>
        {authors}
      </tbody>
    </table>
  );
}

export default AuthorsList;
