import React from 'react';
import style from './ResetButton.module.scss'

const ResetButton = () => {
    function test() {

    }
    return (
        <button id="reset" onClick={test} className={style.game__button}>
            Играть снова?
        </button>
    );
};

export default ResetButton;