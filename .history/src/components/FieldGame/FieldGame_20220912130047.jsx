import React, { useEffect, useState } from 'react';
import './index.scss';
import ClickPlace from '../UI/ClickPlace/ClickPlace';

const FieldGame = () => {
    let [choiceArray, setChoiceArray] = useState([])
    
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
        
        if (document.querySelectorAll('.right').length === 12) {
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