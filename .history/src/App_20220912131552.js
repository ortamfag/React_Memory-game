import React, { useState } from "react";
import "./assets/style/style.scss";

import FieldGame from "./components/FieldGame/FieldGame";
import CounterRightAnswers from "./components/UI/CounterRightAnswers/CounterRightAnswers";
import CounterWrongAnswers from "./components/UI/CounterWrongAnswers/CounterWrongAnswers";
import ResetButton from "./components/UI/ResetButton/ResetButton";

function App() {

  let count = 0
  console.log(count)
  return (  
    <div className="App">
      <h1>Memory-game</h1>

      <div className='game'>
        <div className='game__wrapper'>
          <FieldGame/>
        </div>
        <ResetButton count = {count}/>
        <CounterRightAnswers/>
        <CounterWrongAnswers/>
      </div>
    </div>
  );
}

export default App;
