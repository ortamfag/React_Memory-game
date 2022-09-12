import React, { useEffect, useState } from 'react';
import './index.scss';
import ClickPlace from '../UI/ClickPlace/ClickPlace';

const FieldGame = ({value}) => {
    let [choiceArray, setChoiceArray] = useState([])

    let numberArr = new Set()
    const matrixLength = 12
  
    for (let i = 0; numberArr.size !== matrixLength / 2; i++) {
        numberArr.add(Math.floor(Math.random() * (10 - 1) + 1))
    }
  
    let setNumber = [...numberArr].concat([...numberArr]).sort(() => {
        return - 1
    })

    let [numberState] = useState(setNumber)

    console.log(setNumber)
    console.log(numberState)
    if (value >= 1) {
        setNumber = [...numberArr].concat([...numberArr]).sort(() => {
            return - 1
        })
    }

    
    const clickHistory = (click) => {
        click.currentTarget.classList.toggle('finally')
        setChoiceArray([...choiceArray, click.currentTarget.innerHTML])
    }

    useEffect(() => {
        if (choiceArray.length === 2) {
            let rightNumberArr = document.querySelectorAll('.finally')
            rightNumberArr = [...rightNumberArr]

            if (choiceArray[0] === choiceArray[1]) {
                rightNumberArr.map((item) => {
                    return item.classList.add('right')
                })
                
                choiceArray = []
                  
            } else {
                console.log('неправильно')
                rightNumberArr.map((item) => {
                    return item.classList.remove('finally')
                })
                choiceArray = []
            }
        }
        
        if (document.querySelectorAll('.right').length === 2) {
            document.querySelector("#reset").classList.add('active')
        }
    })
    
    return (
        <>
            {numberState.map((el, i) => 
                <ClickPlace el={el} key={i} clickHistory={clickHistory}/>    
            )}
        </>
    );
};

export default FieldGame;