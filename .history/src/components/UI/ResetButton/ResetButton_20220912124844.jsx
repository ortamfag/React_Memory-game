import React from 'react';
import style from './ResetButton.module.scss'

const ResetButton = (startGame) => {
    function resetGame() {
        let arrRightNum = document.querySelectorAll('.right')
        let resetArr = [...arrRightNum]

        resetArr.forEach((item) => {
            item.classList.remove('right', 'finally')
        })

        startGame()
    }
    return (
        <button id="reset" onClick={resetGame} className={style.game__button}>
            Играть снова?
        </button>
    );
};

export default ResetButton;