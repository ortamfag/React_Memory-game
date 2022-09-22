import React from 'react';
import './CounterRightAnswers.scss'

const CounterRightAnswers = ({stateCounterRightItem}) => {

    return (
        <div>
            <p className='counter__text'>Число правильных ответов</p>
            <p className='counter__text-item'>{stateCounterRightItem}</p>
        </div>
    );
};

export default CounterRightAnswers;