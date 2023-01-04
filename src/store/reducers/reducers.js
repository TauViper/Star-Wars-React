import { ADD_FAVORITE, REMOVE_FAVORITE } from 'store/constants/actionConstants';
import { combineReducers } from 'redux';
import { omit } from 'lodash';
import { getLocalStorage } from 'utils/localStorage';

/**
 *
 * @type {{initialState: Object}} - state, который будет работать по умолчанию
 * getLocalStorage - помещаем в локальное хранилище выбранных персонажей
 */
const initialState = getLocalStorage('store');
/**
 *
 * @param state
 * @param action - выполняемые действия при запросе (...state - раскладывем стейт по компонентам
 * ...action.payload - выполняем действие нагрузки компонента CharacterImg({
 *         [id]: {
 *           name: characterName,
 *           img: characterPhoto,
 *         },
 *       })
 * @returns {Omit<object, *>|{initialState}|(*&{initialState})} - библиотека lodash которая через
 * функцию omit разворачивает state и удаляет из него объект по id, ранее добавленый при помощи
 * action.payload
 */
export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_FAVORITE:
      return omit(state, [action.payload]);
    default:
      return state;
  }
};
export const CombineReducer = combineReducers({
  favoriteReducer,
});
