import React from 'react';
import style from './ResetButton.module.scss'

const ResetButton = ({value, counterClick}) => {
    return (
      <button id="reset" onClick={counterClick} className={style.game__button}>
        {value}Играть снова?
      </button>
    );
};

export default ResetButton;