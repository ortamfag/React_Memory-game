import React from 'react';
import './index.scss';
import ClickPlace from '../UI/ClickPlace/ClickPlace';

const FieldGame = ({rightAnswersCounter}) => {
    let numberArr = new Set()
    const matrixLength = 12

    for (let i = 0; numberArr.size !== matrixLength / 2; i++) {
        numberArr.add(Math.floor(Math.random() * (10 - 1) + 1))
    }

    let number = [...numberArr].concat([...numberArr]).sort(() => {
        return - 1
    })

    
    return (
        <>
            {number.map((el, i) => 
                <ClickPlace el={el} key={i} rightAnswersCounter={rightAnswersCounter}/>    
            )}
        
        
        </>
    );
};

export default FieldGame;

