import React from 'react';
import { ChooseSide } from 'components/HomePage/ChooseSide/ChooseSide';
// import style from 'containers/HomePage/HomePage.module.css';

export const HomePage = () => {
  return (
    <>
      <h1 className='header__text'>Choose your side</h1>
      <ChooseSide />
    </>
  );
};
