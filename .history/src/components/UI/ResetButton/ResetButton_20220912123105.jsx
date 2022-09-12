import React from 'react';
import style from './ResetButton.module.scss'

const ResetButton = () => {
    let button = document.querySelector('.game__button')
    console.log(button.classList)

    return (
        <button className={style.game__button}>
            Играть снова?
        </button>
    );
};

export default ResetButton;