import React from 'react';
import style from './ResetButton.module.scss'

const ResetButton = () => {
    let button = document.querySelector("#reset")
    console.log(button)
    return (
        <button id="reset" onClick={test} className={style.game__button}>
            Играть снова?
        </button>
    );
};

export default ResetButton;