import React from 'react';
import './CounterRightAnswers.scss'

const CounterRightAnswers = ({stateCounterRightItem}) => {

    return (
        <div>
            <p className='counter__text'>Число правильных ответов: {stateCounterRightItem}</p>
        </div>
    );
};

export default CounterRightAnswers;