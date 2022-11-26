import React from 'react';
import img from './img/not-found.png'
import style from './NotFoundPage.module.css';
import {useLocation} from "react-router";

export const NotFoundPage = () => {
    let location = useLocation()
    return (
        <div>
            <img className={style.img} src={img} alt='not-found'/>
            <p  className={style.text}>No Location <u>{location.pathname}</u></p>
        </div>
    );
};