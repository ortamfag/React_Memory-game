import React from 'react';
import style from './ClickPlace.module.scss'

const ClickPlace = ({el, test}) => {
    return (
        <div onClick={() => {test(1)}} className={style.game__item}>
            <p>{el}</p>
        </div>
    );
};

export default ClickPlace;