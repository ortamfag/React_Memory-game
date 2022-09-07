import React from 'react';
import './CounterRightAnswers.scss'

const CounterRightAnswers = ({right}) => {
    return (
        <div>
            <p className='counter__text'>Число правильных ответов: {right}</p>
        </div>
    );
};

export default CounterRightAnswers;