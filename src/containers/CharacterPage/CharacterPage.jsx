import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router';
import { getApiResource } from 'utils/network';
import { API_CHARACTER } from 'constans/api';
import { getPersonImage } from 'services/getPersonData';
import { CharacterSpecification } from 'components/CharacterPageComponent/CharacterSpecification/CharacterSpecification';
import { CharacterImg } from 'components/CharacterPageComponent/CharacterImg/CharacterImg';

import style from 'containers/CharacterPage/CharacterPage.module.css';
import { CharacterGoBackLink } from 'components/CharacterPageComponent/CharacterGoBackLink/CharacterGoBackLink';
import { UiLoader } from 'components/UI/UILoader/UILoader';
// import { CharacterFilms } from 'components/CharacterPageComponent/CharacterFilms/CharacterFilms';

const CharacterFilms = React.lazy(() =>
  import(
    'components/CharacterPageComponent/CharacterFilms/CharacterFilms'
  ).then((module) => ({
    default: module.CharacterFilms,
  }))
);

export const CharacterPage = ({ setErrorApi }) => {
  const [characterInfo, setCharacterInfo] = useState(null);
  const [characterName, setCharacterName] = useState(null);
  const [characterPhoto, setCharacterPhoto] = useState(null);
  const [characterFilms, setCharacterFilms] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_CHARACTER}/${id}/`);
      console.log(res);
      if (res) {
        setCharacterInfo([
          { title: 'Height', data: `${res.height} sm` },
          { title: 'Mass', data: `${res.mass} kg` },
          { title: 'Hair Color', data: res.hair_color },
          { title: 'Skin Color', data: res.skin_color },
          { title: 'Eye Color', data: res.eye_color },
          { title: 'Birth Year', data: res.birth_year },
          { title: 'Gender', data: res.gender },
        ]);
        res.films.length && setCharacterFilms(res.films);
        setCharacterName(res.name);
        setCharacterPhoto(getPersonImage(id));
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, [id, setErrorApi]);
  return (
    <>
      <CharacterGoBackLink />
      <div className={style.wrapper}>
        <span className={style.person__name}>{characterName} </span>
        <div className={style.container}>
          <CharacterImg
            characterPhoto={characterPhoto}
            characterName={characterName}
          />
          {characterInfo && (
            <CharacterSpecification characterInfo={characterInfo} />
          )}

          {characterFilms && (
            <Suspense fallback={<UiLoader />}>
              <CharacterFilms characterFilms={characterFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};
