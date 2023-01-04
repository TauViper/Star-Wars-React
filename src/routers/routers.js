import React from 'react';
import { HomePage } from 'containers/HomePage/HomePage';
import { withErrorApi } from 'HOC/withErrorApi';
import { PersonPage } from 'containers/PersonPage/PersonPage';
import { NotFoundPage } from 'containers/NotFoundPage/NotFoundPage';
import { CharacterPage } from 'containers/CharacterPage/CharacterPage';
import { FavoritePage } from 'containers/FavoritePage/FavoritePage';
import { CharacterSearch } from 'containers/CharacterSearch/CharacterSearch';

const PersonPageWithError = withErrorApi(PersonPage);
const CharacterPageWithError = withErrorApi(CharacterPage);
const CharacterSearchWithError = withErrorApi(CharacterSearch);

export const routers = [
  {
    path: '/Star-Wars-React',
    component: <HomePage />,
  },
  {
    path: '/person',
    component: <PersonPageWithError />,
  },
  {
    path: '/person/:id',
    component: <CharacterPageWithError />,
  },
  {
    path: '/favorite',
    component: <FavoritePage />,
  },
  {
    path: '/search',
    component: <CharacterSearchWithError />,
  },
  {
    path: '*',
    component: <NotFoundPage />,
  },
];
