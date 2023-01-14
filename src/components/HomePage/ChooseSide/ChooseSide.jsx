import React from 'react';
import cn from 'classnames';
import style from './ChooseSide.module.css';
import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEUTRAL,
  useTheme,
} from 'context/ThemeProvider';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';
import imgLightSide from './img/light-side.jpg';

const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();
  return (
    <div
      className={cn(style.item, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <div className={style.item__header}>{text}</div>
      <img src={img} alt={text} className={style.item__img} />
    </div>
  );
};

export const ChooseSide = () => {
  return (
    <div className={style.container}>
      <ChooseSideItem
        // onClick={() => isTheme.change(THEME_LIGHT)}
        theme={THEME_LIGHT}
        text='Light Side'
        img={imgLightSide}
        classes={style.item__light}
      />
      <ChooseSideItem
        // onClick={() => isTheme.change(THEME_DARK)}
        theme={THEME_DARK}
        text='Dark Side'
        img={imgDarkSide}
        classes={style.item__dark}
      />
      <ChooseSideItem
        // onClick={() => isTheme.change(THEME_NEUTRAL)}
        theme={THEME_NEUTRAL}
        text='Falcon'
        img={imgFalcon}
        classes={style.item__neutral}
      />
    </div>
  );
};
// <div className={style.container}>
//   <img
//     onClick={() => isTheme.change(THEME_LIGHT)}
//     src={imgLightSide}
//     alt={THEME_LIGHT}
//   />
//   <img
//     onClick={() => isTheme.change(THEME_DARK)}
//     src={imgDarkSide}
//     alt={THEME_DARK}
//   />
//   <img
//     onClick={() => isTheme.change(THEME_NEUTRAL)}
//     src={imgFalcon}
//     alt={THEME_NEUTRAL}
//   />
// </div>
