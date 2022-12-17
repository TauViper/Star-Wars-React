import React from 'react';
import style from './CharacterImg.module.css';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from 'store/actions/action';
import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

export const CharacterImg = ({
  id,
  characterPhoto,
  characterName,
  characterFavorite,
  setCharacterFavorite,
}) => {
  /**
   *
   * @type {Dispatch<addFavorite ()=>{}>} - хук useDispatch выполняет действия по типу из редуктера
   * @func addFavorite - в action.js на вход принимает пресонажа, который тут образуется из
   * [id]: {
   *           name: characterName,
   *           img: characterPhoto,
   *         }
   *  где id,characterName,characterPhoto - пропсы из компоненты CharacterPage
   *
   * @func removeFavorite - в action.js на вход принимает id персонажа и через редуктор
   * REMOVE_FAVORITE при помощи omit берется текущий стейт и по id через action.payload
   * (действие добавления персонажа) найденный персонаж удаляется из стейта
   */
  const dispatch = useDispatch();
  const toggleButton = () => {
    if (characterFavorite) {
      dispatch(removeFavorite(id));
      setCharacterFavorite(false);
    } else {
      dispatch(
        addFavorite({
          [id]: {
            name: characterName,
            img: characterPhoto,
          },
        })
      );
      setCharacterFavorite(true);
    }
  };
  return (
    <>
      <div className={style.container}>
        <img className={style.photo} src={characterPhoto} alt={characterName} />

        <img
          className={style.favorite}
          src={characterFavorite ? iconFavoriteFill : iconFavorite}
          alt='Add to Favorite'
          onClick={toggleButton}
        />
      </div>
    </>
  );
};
