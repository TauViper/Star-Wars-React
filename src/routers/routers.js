import React from 'react';
import { HomePage } from 'containers/HomePage/HomePage';
import { withErrorApi } from 'HOC/withErrorApi';
import { PersonPage } from 'containers/PersonPage/PersonPage';
import { NotFoundPage } from 'containers/NotFoundPage/NotFoundPage';
import { CharacterPage } from 'containers/CharacterPage/CharacterPage';
import { FavoritePage } from 'containers/FavoritePage/FavoritePage';

const PersonPageWithError = withErrorApi(PersonPage);
const CharacterPageWithError = withErrorApi(CharacterPage);

export const routers = [
  {
    path: '/',
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
    path: '*',
    component: <NotFoundPage />,
  },
];
