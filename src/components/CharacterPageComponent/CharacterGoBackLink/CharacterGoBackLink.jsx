import React from 'react';
import { useNavigate } from 'react-router';
import style from './CharacterGoBackLink.module.css';
import iconBack from './img/back.svg';

export const CharacterGoBackLink = () => {
  const goBack = useNavigate();
  const handleClickBack = (e) => {
    e.preventDefault();
    goBack(-1);
  };
  return (
    <div>
      <a href='#' className={style.link} onClick={handleClickBack}>
        <img className={style.link__img} src={iconBack} alt='Go back' />
        <span>Go back</span>
      </a>
    </div>
  );
};
