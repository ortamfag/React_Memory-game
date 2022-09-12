import React from 'react';
import style from './ResetButton.module.scss'

const ResetButton = () => {
    let button = document.querySelector("#reset")
    console.log
    return (
        <button id="reset" className={style.game__button}>
            Играть снова?
        </button>
    );
};

export default ResetButton;