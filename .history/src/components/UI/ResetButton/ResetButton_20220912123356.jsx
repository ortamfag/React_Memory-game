import React from 'react';
import style from './ResetButton.module.scss'

const ResetButton = () => {
    return (
        <button id="reset" className={style.game__button}>
            Играть снова?
        </button>
    );
};

export default ResetButton;