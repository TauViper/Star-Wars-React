import React from 'react';
import style from './CharacterSpecification.module.css';
export const CharacterSpecification = ({ characterInfo }) => {
  return (
    <div className={style.wrapper}>
      <ul className={style.list__container}>
        {characterInfo.map(
          ({ title, data }) =>
            data && (
              <li className={style.list__item} key={title}>
                <span className={style.item__title}>
                  {title}:{data}
                </span>
              </li>
            )
        )}
      </ul>
    </div>
  );
};
