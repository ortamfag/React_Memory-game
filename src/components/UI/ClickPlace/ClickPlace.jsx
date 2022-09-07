import React from 'react';
import style from './ClickPlace.module.scss'

const ClickPlace = ({rightAnswersCounter, el}) => {
    return (
        <div onClick={() => {
            rightAnswersCounter(1)
        }} 
            className={style.game__item}>
            <p>{el}</p>
        </div>
    );
};

export default ClickPlace;