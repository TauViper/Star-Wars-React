import React from 'react';
// import style from './FavoritePage.module.css';
import { useSelector } from 'react-redux';

export const FavoritePage = () => {
  const storeData = useSelector((state) => state.favoriteReducer);
  console.log(storeData);
  return (
    <div>
      <h1>FavoritePage</h1>
    </div>
  );
};
