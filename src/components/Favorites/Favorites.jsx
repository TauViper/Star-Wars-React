import React, { useEffect, useState } from 'react';
import style from './Favorites.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import icon from './img/bookmark.svg';

export const Favorites = () => {
  const storeData = useSelector((state) => state.favoriteReducer);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const length = Object.keys(storeData).length;
    setCount(length);
  });

  return (
    <div className={style.container}>
      <Link to='/favorite'>
        <span className={style.counter}>{count}</span>
        <img className={style.icon} src={icon} alt={icon} />
      </Link>
    </div>
  );
};
