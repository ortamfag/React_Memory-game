import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./assets/style/style.scss";

import FieldGame from "./components/FieldGame/FieldGame";
import CounterRightAnswers from "./components/UI/CounterRightAnswers/CounterRightAnswers";
import CounterWrongAnswers from "./components/UI/CounterWrongAnswers/CounterWrongAnswers";
import ResetButton from "./components/UI/ResetButton/ResetButton";

import { setCounterRightAnswers } from "./store/reducers/rightAnswersCounter/rightAnswersCounter";
import { setCounterWrongAnswers } from "./store/reducers/wrongAnswersCounter/wrongAnswersCounter";
import { writeNewGameNumbers } from "./store/reducers/gameNumbers/gameNumbers";

function App() {
    const stateGameNumber = useSelector(state => state.setNewGameNumbers.gameNumbers);
    const dispatch = useDispatch()

    const newGameNumbers = () => {
        dispatch(setCounterRightAnswers(0))
        dispatch(setCounterWrongAnswers(0));
        document.querySelector("#reset").classList.remove('active')

        let arrRightNum = document.querySelectorAll(".right");
            if (arrRightNum.length >= 12) {
                let resetArr = [...arrRightNum];
                resetArr.forEach((item) => {
                    item.classList.remove("right", "finally");
                });
            }

        let numberArr = new Set()
        const matrixLength = 12
  
        for (let i = 0; numberArr.size !== matrixLength / 2; i++) {
            numberArr.add(Math.floor(Math.random() * (10 - 1) + 1))
        }
  
        let setNumber = [...numberArr].concat([...numberArr]).sort(() => {
            return - 1
        })

        dispatch(writeNewGameNumbers(setNumber));
    }

        const stateCounterRightItem = useSelector(state => state.setNewRightCount.counterRightAnswers);
        const stateCounterWrongItem = useSelector(state => state.setNewWrongCount.counterWrongAnswers);

    return (  
        <div className="App">
            <h1>Memory-game</h1>
            <div className='game'>
                <div className='game__wrapper'>
                    <FieldGame stateGameNumber = {stateGameNumber}/>
                </div>

                <ResetButton newGameNumbers={newGameNumbers}/>
                
                <div className="counters">
                    <CounterRightAnswers stateCounterRightItem={stateCounterRightItem}/>
                    <CounterWrongAnswers stateCounterWrongItem={stateCounterWrongItem}/>
                </div>
            </div>
        </div>
  );
}

export default App;
