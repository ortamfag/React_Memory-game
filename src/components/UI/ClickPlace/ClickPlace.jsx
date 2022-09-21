import React from 'react';
import style from './ClickPlace.module.scss'

const ClickPlace = ({el, newHistoryNumber}) => {

    return (
        <div onClick={newHistoryNumber} className={style.game__item}>
            {el}
        </div>
    );
};

export default ClickPlace;