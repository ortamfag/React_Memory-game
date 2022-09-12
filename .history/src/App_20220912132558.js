import React, { useState } from "react";
import "./assets/style/style.scss";

import FieldGame from "./components/FieldGame/FieldGame";
import CounterRightAnswers from "./components/UI/CounterRightAnswers/CounterRightAnswers";
import CounterWrongAnswers from "./components/UI/CounterWrongAnswers/CounterWrongAnswers";
import ResetButton from "./components/UI/ResetButton/ResetButton";

function App() {

  let [value, setValue] = useState(0)
  const counterClick = (val) => {
    setValue(Number(val) + Number(val))
    console.log(value)
  }
  return (  
    <div className="App">
      <h1>Memory-game</h1>

      <div className='game'>
        <div className='game__wrapper'>
          <FieldGame/>
        </div>
        <ResetButton value = {value} counterClick={counterClick}/>
        <CounterRightAnswers/>
        <CounterWrongAnswers/>
      </div>
    </div>
  );
}

export default App;
