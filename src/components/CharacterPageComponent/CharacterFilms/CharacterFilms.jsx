import React, { useEffect, useState } from 'react';
import { conCurrentFilms } from 'utils/network';
import style from './CharacterFilms.module.css';

export const CharacterFilms = ({ characterFilms }) => {
  const [filmsName, setFilmsName] = useState([]);
  useEffect(() => {
    (async () => {
      /**
       * conCurrentFilms - функция из network.js для прохода по ссылкам и получения результата в json
       * characterFilms - массив полученных url из запроса setCharacterFilms(res.films)
       * setFilmsName - получаем массив списка фильмов после запроса данных по url
       */
      setFilmsName(await conCurrentFilms(characterFilms));
    })();
  }, [characterFilms]);

  return (
    <div className={style.wrapper}>
      <ul className={style.list__container}>
        {filmsName
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }) => (
            <li className={style.list__item} key={episode_id}>
              <span className={style.item__episode}>Episode {episode_id}</span>
              <span className={style.item__colon}>:</span>
              <span className={style.item__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
// export default CharacterFilms;
