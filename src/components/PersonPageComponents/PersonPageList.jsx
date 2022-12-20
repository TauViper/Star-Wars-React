import React from 'react';
import style from './PersonPageList.module.css';
import { Link } from 'react-router-dom';

export const PersonPageList = ({ person }) => {
  return (
    <ul className={style.list__container}>
      {person.map(({ id, name, img }) => (
        <li className={style.list__item} key={id}>
          <Link to={`/person/${id}`}>
            <img className={style.person__photo} src={img} alt={name} />
            <p style={{ textAlign: 'center' }}>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
