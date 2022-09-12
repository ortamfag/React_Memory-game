import React, { useState } from "react";
import "./assets/style/style.scss";

import FieldGame from "./components/FieldGame/FieldGame";
import CounterRightAnswers from "./components/UI/CounterRightAnswers/CounterRightAnswers";
import CounterWrongAnswers from "./components/UI/CounterWrongAnswers/CounterWrongAnswers";
import ResetButton from "./components/UI/ResetButton/ResetButton";

function App() {

  function resetGame() {
    let arrRightNum = document.querySelectorAll('.right')
    if (arrRightNum >= 1) {
        let resetArr = [...arrRightNum]
        resetArr.forEach((item) => {
            item.classList.remove('right', 'finally')
        })
    }

    let numberArr = new Set()
    const matrixLength = 12
  
    for (let i = 0; numberArr.size !== matrixLength / 2; i++) {
        numberArr.add(Math.floor(Math.random() * (10 - 1) + 1))
    }
  
    let setNumber = [...numberArr].concat([...numberArr]).sort(() => {
        return - 1
    })
  }
  const [numberState] = useState(setNumber)

  return (  
    <div className="App">
      <h1>Memory-game</h1>

      <div className='game'>
        <div className='game__wrapper'>
          <FieldGame resetGame={resetGame}/>
        </div>
        <ResetButton/>
        <CounterRightAnswers/>
        <CounterWrongAnswers/>
      </div>
    </div>
  );
}

export default App;
