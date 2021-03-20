import React from 'react';
import { withRouter } from 'react-router-dom';
import constants from '../../constants/constants';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}
  >
    <div
      className='background-image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>{constants.shopNow}</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
