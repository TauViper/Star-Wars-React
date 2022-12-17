import { ADD_FAVORITE, REMOVE_FAVORITE } from 'store/constants/actionConstants';

/**
 *
 * @param character - указывем функции что на вход нужно принять персонажа, который выбирается через onClick
 * в компоненте CharacterImg диспатчем addFavorite объект
 * [id]: {
 *           name: characterName,
 *           img: characterPhoto,
 *         }
 * @returns {{payload, type: string}} - вернуть объект полученный в payload
 */
export const addFavorite = (character) => ({
  type: ADD_FAVORITE,
  payload: character,
});
/**
 *
 * @param id -  указывем функции что на вход нужно принять id персонажа который выбирается через onClick
 * в компоненте CharacterImg диспатчем removeFavorite
 * @returns {{payload, type: string}} - вернуть полученный id в payload
 */
export const removeFavorite = (id) => ({
  type: REMOVE_FAVORITE,
  payload: id,
});
