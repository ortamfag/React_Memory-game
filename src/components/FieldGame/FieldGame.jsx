import React, { useEffect, useState } from 'react';
import './index.scss';
import ClickPlace from '../UI/ClickPlace/ClickPlace';

const FieldGame = () => {    
    let numberArr = new Set()
    const matrixLength = 12
  
    for (let i = 0; numberArr.size !== matrixLength / 2; i++) {
        numberArr.add(Math.floor(Math.random() * (10 - 1) + 1))
    }
  
    let setNumber = [...numberArr].concat([...numberArr]).sort(() => {
        return - 1
    })

    const [numberState, setNumberState] = useState(setNumber)

    const [value, setValue] = useState(0)

    const rightAnswersCounter = (click) => {
        setValue(Number(value) + Number(click))        
    }

    // useEffect(() => {   
    //     console.log('test')
    // })
    
    return (
        <>
            {numberState.map((el, i) => 
                <ClickPlace el={el} key={i} rightAnswersCounter={rightAnswersCounter}/>    
            )}
        </>
    );
};

export default FieldGame;