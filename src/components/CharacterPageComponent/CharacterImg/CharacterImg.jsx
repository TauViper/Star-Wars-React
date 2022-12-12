import React from 'react';
import style from './CharacterImg.module.css';

export const CharacterImg = ({ characterPhoto, characterName }) => {
  return (
    <div className={style.container}>
      <img className={style.photo} src={characterPhoto} alt={characterName} />;
    </div>
  );
};
