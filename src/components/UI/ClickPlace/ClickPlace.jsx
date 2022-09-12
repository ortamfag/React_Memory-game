import React from 'react';
import style from './ClickPlace.module.scss'

const ClickPlace = ({el, clickHistory}) => {

    return (
        <div onClick={clickHistory} className={style.game__item}>
            {el}
        </div>
    );
};

export default ClickPlace;