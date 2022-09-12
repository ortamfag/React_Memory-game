import React from 'react';
import style from './ResetButton.module.scss'

const ResetButton = () => {
    function resetGame() {
        console.log(document.querySelectorAll('.right'))
    }
    return (
        <button id="reset" onClick={resetGame} className={style.game__button}>
            Играть снова?
        </button>
    );
};

export default ResetButton;