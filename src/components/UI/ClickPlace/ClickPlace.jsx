import React from 'react';
import style from './ClickPlace.module.scss'

const ClickPlace = ({el, rightAnswersCounter}) => {
    const test = (click) => {
        console.log(click.currentTarget.className)        
    }
    return (
        <div onClick={() => {rightAnswersCounter(1)}} className={style.game__item}>
            <p className='test' onClick={test}>{el}</p>
        </div>
    );
};

export default ClickPlace;