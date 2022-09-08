import React, { useState } from 'react';
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

    console.log(numberState)

    function test() {
        console.log('нажал')
    }
    
    return (
        <>
            {numberState.map((el, i) => 
                <ClickPlace el={el} key={i} test={test}/>    
            )}
        </>
    );
};

export default FieldGame;

