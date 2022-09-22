import React from 'react';
import style from './ResetButton.module.scss'

const ResetButton = ({newGameNumbers}) => {
    return (
        <button id="reset" onClick={newGameNumbers} className={style.game__button}>
            Играть снова?
        </button>
    );
};

export default ResetButton;