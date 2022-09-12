import React, { useState } from "react";
import "./assets/style/style.scss";

import FieldGame from "./components/FieldGame/FieldGame";
import CounterRightAnswers from "./components/UI/CounterRightAnswers/CounterRightAnswers";
import CounterWrongAnswers from "./components/UI/CounterWrongAnswers/CounterWrongAnswers";
import ResetButton from "./components/UI/ResetButton/ResetButton";

function App() {

  let [value, setValue] = useState(0)
  const counterClick = () => {
    let arrRightNum = document.querySelectorAll('.right')
        if (arrRightNum.length >= 1) {
            let resetArr = [...arrRightNum]
            resetArr.forEach((item) => {
                item.classList.remove('right', 'finally')
            })
        }
    setValue(Number(value) + Number(1))
    setTimeout(setValue(Number(value) - Number(1)), 1000)
  }
  return (  
    <div className="App">
      <h1>Memory-game</h1>

      <div className='game'>
        <div className='game__wrapper'>
          <FieldGame value={value}/>
        </div>
        <ResetButton value = {value} setValue = {setValue} counterClick={counterClick}/>
        <CounterRightAnswers/>
        <CounterWrongAnswers/>
      </div>
    </div>
  );
}

export default App;
