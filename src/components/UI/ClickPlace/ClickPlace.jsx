import React from 'react';
import style from './ClickPlace.module.scss'

const ClickPlace = ({el, rightAnswersCounter}) => {
    
    return (
        <div onClick={() => {rightAnswersCounter()}} className={style.game__item}>
            <p>{el}</p>
        </div>
    );
};

export default ClickPlace;