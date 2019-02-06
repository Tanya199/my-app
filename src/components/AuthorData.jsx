import React from 'react';

import './styles/AuthorData.css';

const AuthorData = ({ author }) => {

  const firstLetter = author.name.split('')[0];

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
   
  return (
    <tr>
      <td>
        <span
          className="circle"
          style={{backgroundColor: getRandomColor()}}
        >
        {firstLetter}
        </span>
      </td>
      <td>{author.name}
        <td className="light">{author.count_pub} публ.</td>
      </td>
      <td className="alight-right">{author.pageviews}</td>
    </tr>
  );
}

export default AuthorData;