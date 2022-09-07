import React, { useState } from 'react';
import style from './ClickPlace.module.scss'

const ClickPlace = ({el}) => {
    const [right, setRight] = useState(0)
    const [wrong, setWrong] = useState(0)
  
    const AnswersCounter = (click) => {
      setRight(Number(right) + Number(click));
      setWrong(Number(wrong) + Number(click))
    };
    console.log(right)

    return (
        <div onClick={() => {AnswersCounter(1)}} className={style.game__item}>
            <p>{el}</p>
        </div>
    );
};

export default ClickPlace;