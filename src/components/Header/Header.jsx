import React, { useEffect, useState } from 'react';
import imgDroid from './img/droid.svg';
import imgLightSaber from './img/lightsaber.svg';
import imgSpaceStation from './img/space-station.svg';
import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEUTRAL,
  useTheme,
} from 'context/ThemeProvider';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { Favorites } from 'components/Favorites/Favorites';

const links = [
  { to: '/Star-Wars-React', link: 'Home' },
  { to: '/person?list=1', link: 'Person' },
  { to: '*', link: 'NotFound' },
  { to: '/search', link: 'Search' },
];
console.log(links);
export const Header = () => {
  const [icon, setIcon] = useState();
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightSaber);
        break;
      case THEME_DARK:
        setIcon(imgSpaceStation);
        break;
      case THEME_NEUTRAL:
        setIcon(imgDroid);
        break;
      default:
        setIcon(imgDroid);
    }
  }, [isTheme]);
  return (
    <div className={style.container}>
      <img src={icon} alt='Star Wars' className={style.logo} />
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
