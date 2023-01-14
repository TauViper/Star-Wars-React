import React, { useEffect, useState } from 'react';
import { getApiResource } from 'utils/network';
import { getPersonId, getPersonImage } from 'services/getPersonData';
import { API_SEARCH } from 'constans/api';
import { PersonPageList } from 'components/PersonPageComponents/PersonPageList';
import style from './CharacterSearch.module.css';
import { UiInput } from 'components/UI/UiInput/UiInput';

export const CharacterSearch = ({ setErrorApi }) => {
  const [search, setSearch] = useState('');
  const [person, setPerson] = useState([]);

  const getResource = async (param) => {
    const list = await getApiResource(API_SEARCH + param);

    if (list) {
      const personList = list.results.map(({ name, url }) => {
        const id = getPersonId(url);
        const img = getPersonImage(id);

        return {
          id,
          name,
          img,
        };
      });
      setPerson(personList);

      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getResource('');
  }, []);
  const change = (value) => {
    setSearch(value);
    getResource(value);
  };

  return (
    <div>
      <UiInput
        className={style.input__search}
        type='text'
        value={search}
        change={change}
        placeholder='input character name'
      />
      <PersonPageList person={person} />
    </div>
  );
};
