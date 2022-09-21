import React, { useEffect, useState } from 'react';
import './index.scss';
import ClickPlace from '../UI/ClickPlace/ClickPlace';
import { useDispatch, useSelector } from 'react-redux';
import { newHistoryItem } from '../../action/newHistoryItem';

const FieldGame = () => {

    const stateHistoryItem = useSelector(state => state.setHistory.historyNumberArr);
    const dispatch = useDispatch()

    const newHistoryNumber = (click) => {
        click.currentTarget.classList.toggle('finally')
        dispatch(newHistoryItem([...stateHistoryItem, click.currentTarget.innerHTML]))
    }


    let numberArr = new Set()
    const matrixLength = 12
  
    for (let i = 0; numberArr.size !== matrixLength / 2; i++) {
        numberArr.add(Math.floor(Math.random() * (10 - 1) + 1))
    }
  
    let setNumber = [...numberArr].concat([...numberArr]).sort(() => {
        return - 1
    })

    let [numberState] = useState(setNumber)

    useEffect(() => {
        if (stateHistoryItem.length === 2) {
            let rightNumberArr = document.querySelectorAll('.finally')
            rightNumberArr = [...rightNumberArr]

            if (stateHistoryItem[0] === stateHistoryItem[1]) {
                rightNumberArr.map((item) => {
                    return item.classList.add('right')
                })
                
                dispatch(newHistoryItem([]))
                  
            } else {
                console.log('неправильно')
                rightNumberArr.map((item) => {
                    return item.classList.remove('finally')
                })
                dispatch(newHistoryItem([]))
            }
        }
        
        if (document.querySelectorAll('.right').length === 2) {
            document.querySelector("#reset").classList.add('active')
        }
    })
    
    return (
        <>
            {numberState.map((el, i) => 
                <ClickPlace el={el} key={i} newHistoryNumber={newHistoryNumber}/>    
            )}
        </>
    );
};

export default FieldGame;