import React from 'react';
import style from './PersonNav.module.css'
import {Link} from "react-router-dom";
import {UiButton} from "components/UI/UiButton/UiButton";

export const PersonNav = ({getResource, nextPage, previousPage, counter}) => {
    const handleChangePrevious = () => getResource(previousPage)
    const handleChangeNext = () => getResource(nextPage)

    return (
        <div className={style.container}>
            <Link to={`/person/?list=${counter-1}`}>
                <UiButton onClick={handleChangePrevious} disabled={!previousPage} name = "Previous"/>
            </Link>
            <Link to={`/person/?list=${counter+1}`}>
                <UiButton onClick={handleChangeNext} disabled={!nextPage} name = "Next"/>
            </Link>
        </div>
    );
};




















































