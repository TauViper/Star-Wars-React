import {
  HTTPS,
  API_URL,
  API_PERSON,
  GUIDE_IMG_PEOPLE,
  GUIDE_IMG,
  API_PARAM_PAGE,
} from 'constans/api';

//FOR PersonPage
const getId = (url, category) => {
  const id = url.replace(HTTPS + API_URL + category, '').replace(/\//g, '');
  return id;
};

export const getPersonId = (url) => getId(url, API_PERSON);

export const getPersonImage = (id) => `${GUIDE_IMG_PEOPLE}/${id + GUIDE_IMG}`;

export const getPersonPage = (url) => {
  const pos = url.lastIndexOf(API_PARAM_PAGE);
  const id = url.slice(pos + API_PARAM_PAGE.length, url.length);
  return Number(id);
};

//FOR CharacterPage
