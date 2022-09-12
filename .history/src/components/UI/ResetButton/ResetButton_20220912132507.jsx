import React from 'react';
import style from './ResetButton.module.scss'

const ResetButton = ({value, counterClick}) => {
    function resetGame() {
        let arrRightNum = document.querySelectorAll('.right')
        if (arrRightNum.length >= 1) {
            let resetArr = [...arrRightNum]
            resetArr.forEach((item) => {
                item.classList.remove('right', 'finally')
            })
        }
      }

    return (
      <button id="reset" onClick={resetGame} className={style.game__button}>
        {value}Играть снова?
      </button>
    );
};

export default ResetButton;