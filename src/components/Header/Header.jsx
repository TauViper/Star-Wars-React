import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { Favorites } from 'components/Favorites/Favorites';

const links = [
  { to: '/', link: 'Home' },
  { to: '/person?list=1', link: 'Person' },
  { to: '*', link: 'NotFound' },
  { to: '/favorite', link: 'Favorites' },
];
console.log(links);
export const Header = () => {
  return (
    <div className={style.container}>
      <ul className={style.list__container}>
        {links.map((item, index) => (
          <li key={index}>
            <NavLink to={item.to}>{item.link}</NavLink>
          </li>
        ))}
      </ul>
      <Favorites />
    </div>
  );
};

// Variant 1
// <li>
//   <NavLink to='/'>Home</NavLink>
// </li>
// <li>
//   <NavLink to='/person?list=1'>Person</NavLink>
// </li>
// <li>
//   <NavLink to='*'>NotFound</NavLink>
// </li>

// Variant 2
// <ul>
//   {links.map((item,index) => (
//     <li key={index}>
//       <NavLink to={item.to}>{item.link}</NavLink>
//     </li>;
//     ))}
//   </li>
// </ul>;
