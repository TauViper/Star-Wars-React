import React, { useState, useEffect } from 'react';
import { API_PEOPLE } from 'constans/api';
import {
  getPersonId,
  getPersonImage,
  getPersonPage,
} from 'services/getPersonData';
import { PersonPageList } from 'components/PersonPageComponents/PersonPageList';
import { getApiResource } from 'utils/network';
import { useQueryParams } from 'hooks/useQueryParams';
import { PersonNav } from 'components/PersonNav/PersonNav';

export const PersonPage = ({ setErrorApi }) => {
  const [person, setPerson] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [counter, setCounter] = useState(1);

  const query = useQueryParams().get('list');

  const getResource = async (url) => {
    const list = await getApiResource(url);

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
      setPreviousPage(list.previous);
      setNextPage(list.next);
      setCounter(getPersonPage(url));

      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getResource(API_PEOPLE + query);
  }, [query]);
  return (
    <>
      <PersonNav
        getResource={getResource}
        previousPage={previousPage}
        nextPage={nextPage}
        counter={counter}
      />
      {person && <PersonPageList person={person} />}
    </>
  );
};

// const [nextPage, setNextPage] = useState(null)
// const [previousPage, setPreviousPage] = useState(null)
// const [counterPage, setCounterPage] = useState(1)
// const query = useQueryParams()
// const queryPage = query.get('page')

//setNextPage(list.next)
//             setPreviousPage(list.previous)
//             setCounterPage(getPersonPageId(url))

// <PersonNav
//     getResource = {getResource}
//     nextPage = {nextPage}
//     previousPage = {previousPage}
//     counterPage = {counterPage}
// />
