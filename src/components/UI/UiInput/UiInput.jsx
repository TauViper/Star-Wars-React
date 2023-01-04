import React from 'react';
import cn from 'classnames';

import icon from './img/cancel.svg';

import '../index.css';
import style from './UiInput.module.css';

export const UiInput = ({ value, change, placeholder, classes }) => (
  <div className={cn(style.wrapper__input, classes)}>
    <input
      type='text'
      value={value}
      onChange={(e) => change(e.target.value)}
      placeholder={placeholder}
      className={style.input}
    />
    <img
      onClick={() => value && change('')}
      src={icon}
      className={cn(style.clear, !value && style.clear__disabled)}
      alt='Clear'
    />
  </div>
);

// import { useState } from 'react';
// import UiInput from '@ui/UiInput';

// const App = () => {
//     const [value, setValue] = useState('');

//     const handleInputChange = value => {
//         setValue(value);
//     }

//     return (
//         <UiInput
//             value={value}
//             handleInputChange={handleInputChange}
//         />
//     )
// }
