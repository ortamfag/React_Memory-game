import React, { useEffect } from 'react';
import style from './ResetButton.module.scss'

const ResetButton = () => {

    return (
        <button className={style.game__button}>
            Играть снова?
        </button>
    );
};

export default ResetButton;