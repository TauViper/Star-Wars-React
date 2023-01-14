import React from 'react';
import cn from 'classnames';
import '../index.css';
import style from 'components/UI/UiButton/UiButton.module.css';

export const UiButton = ({ onClick, disabled, name, theme = 'dark' }) => (
  <>
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(style.button, style[theme])}
    >
      {name}
    </button>
  </>
);
