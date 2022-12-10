import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={style.container}>
      <ul className={style.list__container}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/person?list=1'>Person</NavLink>
        </li>
        <li>
          <NavLink to='*'>NotFound</NavLink>
        </li>
      </ul>
    </div>
  );
};
