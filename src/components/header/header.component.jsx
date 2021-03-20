import React from 'react';
import { Link } from 'react-router-dom';
import constants from '../../constants/constants';
import Logo from '../svg/Logo.component';
import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        {constants.shop}
      </Link>
      <Link className='option' to='/contact'>
        {constants.contact}
      </Link>
      <Link className='option' to='/signin'>
        {constants.signIn}
      </Link>
    </div>
  </div>
);

export default Header;
