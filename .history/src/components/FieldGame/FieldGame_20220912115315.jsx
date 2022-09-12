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

    const [numberState] = useState(setNumber)

    const [value, setValue] = useState(0)

    let [choiceArray, setChoiceArray] = useState([])
    
    // let [arr, setArr] = useState([])
    
    // const clickHistory = (click) => {
    //     click.currentTarget.classList.toggle('finally')
    //     setChoiceArray([...choiceArray, click.currentTarget.innerHTML])

    //     arr = document.querySelectorAll('.right')
    // }

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

        if (document.querySelectorAll('.right').length === 12) {
            gameButton.innerHTML += '<button id="reset" onclick="resetButton()">Играть снова?</button>'
        }
    })
    


    // useEffect(() => {   
    //     console.log('test')
    // })
    
    return (
        <>
            {numberState.map((el, i) => 
                <ClickPlace el={el} key={i}/>    
            )}
        </>
    );
};

export default FieldGame;