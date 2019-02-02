import React from 'react';
import AuthorData from './AuthorData';

import './styles/AuthorsList.css';

 const AuthorsList = (props) => {
   const authorData = props.data.map((author, index) => {
     return <AuthorData
          key={index}
          author={author}
        />;
   });
   
  return (
    <table className="authors-list">
      <tbody>
        {authorData}
      </tbody>
    </table>
  );
}

export default AuthorsList;