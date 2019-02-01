import React, { Component } from 'react';
import AuthorsData from '../data/data.json';

import './styles/AuthorsList.css';

class AuthorsList extends Component {
  render() {
    return(
      <ul className="AuthorsList-ul">
        {AuthorsData.map((authorDetail, index) => {
          return <li className="AuthorList-li">
            <div className="li-display">
              <div className="display-align">
                <span className="Author-img"></span>
                <span className="Author-name">{authorDetail.name}</span>
              </div>
              <div className="Author-pagevies">{authorDetail.pageviews}</div>
            </div>
            <div className="Author-count_pub">{authorDetail.count_pub} публ</div>
          </li>
        })}
      </ul>
    );
  }
}

export default AuthorsList;