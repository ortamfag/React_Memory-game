import React, { useState } from 'react';
import style from './ClickPlace.module.scss'

const ClickPlace = ({el}) => {
    const [choiceArray, setChoiceArray] = useState([])
    
    const clickHistory = (click) => {
        click.currentTarget.classList.toggle('finally')
        setChoiceArray([...choiceArray, Number(click.currentTarget.innerHTML)])
        console.log(choiceArray)
    }

    return (
        <div onClick={clickHistory} className={style.game__item}>
            {el}
        </div>
    );
};

export default ClickPlace;