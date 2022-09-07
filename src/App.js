import { useState } from "react";
import "./assets/style/style.scss";

import FieldGame from "./components/FieldGame/FieldGame";
import CounterRightAnswers from "./components/UI/CounterRightAnswers/CounterRightAnswers";
import CounterWrongAnswers from "./components/UI/CounterWrongAnswers/CounterWrongAnswers";

function App() {
  const [right, setRight] = useState(0)
  const [wrong, setWrong] = useState(0)

  const rightAnswersCounter = (click) => {
    setRight(Number(right) + Number(click));
    setWrong(Number(wrong) + Number(click))
  };

  // const wrongAnswersCounter = (click) => {
  //   setWrong(Number(wrong) + Number(click))
  // }
 


  return (  
    <div className="App">
      <h1>Memory-game</h1>

      <div className='game'>
        <div className='game__wrapper'>
          <FieldGame rightAnswersCounter={rightAnswersCounter}/>
        </div>
        <CounterRightAnswers right={right}/>
        <CounterWrongAnswers wrong={wrong}/>
      </div>
    </div>
  );
}

export default App;
