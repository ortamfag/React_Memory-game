import React from 'react';
import style from './ResetButton.module.scss'

const ResetButton = ({counterClick}) => {
    return (
      <button id="reset" onClick={counterClick} className={style.game__button}>
        Играть снова?
      </button>
    );
};

export default ResetButton;