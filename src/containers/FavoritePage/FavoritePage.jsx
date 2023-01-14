import React, { useEffect, useState } from 'react';
// import style from './FavoritePage.module.css';
import { useSelector } from 'react-redux';
import { PersonPageList } from 'components/PersonPageComponents/PersonPageList';

export const FavoritePage = () => {
  const storeData = useSelector((state) => state.favoriteReducer);
  console.log(storeData);
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const arr = Object.entries(storeData);
    console.log(arr);
    const res = arr.map((item) => {
      return {
        id: item[0],
        ...item[1],
      };
    });
    setPerson(res);
  }, [storeData]);

  return (
    <div>
      <PersonPageList person={person} />
    </div>
  );
};
