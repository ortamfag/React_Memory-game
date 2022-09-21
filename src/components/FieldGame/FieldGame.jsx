import React, { useEffect, useState } from 'react';
import './index.scss';
import ClickPlace from '../UI/ClickPlace/ClickPlace';
import { useDispatch, useSelector } from 'react-redux';
import { newHistoryItem } from '../../action/newHistoryItem';
import { setCounterRightAnswers } from '../../store/reducers/rightAnswersCounter/rightAnswersCounter';

const FieldGame = ({stateGameNumber}) => {
    const stateHistoryItem = useSelector(state => state.setHistory.historyNumberArr);
    const dispatch = useDispatch()

    const newHistoryNumber = (click) => {
        click.currentTarget.classList.toggle('finally')
        dispatch(newHistoryItem([...stateHistoryItem, click.currentTarget.innerHTML]))
    }

    const [rightCounter, setRightCounter] = useState(1)
    // const [wrongCounter, setWrongCounter] = useState(1)

    useEffect(() => {
        if (stateHistoryItem.length === 2) {
            let rightNumberArr = document.querySelectorAll('.finally')
            rightNumberArr = [...rightNumberArr]

            if (stateHistoryItem[0] === stateHistoryItem[1]) {
                setRightCounter(rightCounter + 1)
                rightNumberArr.map((item) => {
                    return item.classList.add('right')
                })

                dispatch(setCounterRightAnswers(rightCounter))
                dispatch(newHistoryItem([]))
                  
            } else {
                console.log('неправильно')
                rightNumberArr.map((item) => {
                    return item.classList.remove('finally')
                })
                dispatch(setCounterRightAnswers(0))
                dispatch(newHistoryItem([]))
            }
        }
        
        if (document.querySelectorAll('.right').length === 12) {
            document.querySelector("#reset").classList.add('active')
        }
    })
    
    return (
        <>
            {stateGameNumber.map((el, i) => 
                <ClickPlace el={el} key={i} newHistoryNumber={newHistoryNumber}/>    
            )}
        </>
    );
};

export default FieldGame;