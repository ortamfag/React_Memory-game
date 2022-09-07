import React from 'react';
import './CounterWrongAnswers.model.scss'

const CounterWrongAnswers = ({wrong}) => {
    return (
        <div>
            <p className='counter__text'>Число неправильных ответов: {wrong}</p>
        </div>
    );
};

export default CounterWrongAnswers;