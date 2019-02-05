import React from 'react';

import './styles/AuthorData.css';

const AuthorData = ({ author, index }) => {
  return <tr>
    <td><span className="circle"></span></td>
    <td>{author.name}
      <td className="light">{author.count_pub} публ</td>
    </td>
    <td className="alight-right">{author.pageviews}</td>
  </tr>
}

export default AuthorData;