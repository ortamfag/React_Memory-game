import React from 'react';
import './CounterWrongAnswers.model.scss'

const CounterWrongAnswers = ({stateCounterWrongItem}) => {
    return (
        <div>
            <p className='counter__text'>Число неправильных ответов:</p>
            <p className='counter__text-item'>{stateCounterWrongItem}</p>
        </div>
    );
};

export default CounterWrongAnswers;