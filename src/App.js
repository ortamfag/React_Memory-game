import { useState } from "react";
import "./assets/style/style.scss";

import FieldGame from "./components/FieldGame/FieldGame";
import CounterRightAnswers from "./components/UI/CounterRightAnswers/CounterRightAnswers";

function App() {
  const [value, setValue] = useState(0)
    const rightAnswersCounter = (click) => {
      console.log('dsdsd')
        setValue(Number(value) + Number(click) )
    }

  return (  
    <div className="App">
      <h1>Memory-game</h1>

      <div className='game'>
        <div className='game__wrapper'>
          <FieldGame rightAnswersCounter={rightAnswersCounter}/>
        </div>
        <CounterRightAnswers name={value}/>
        <button onClick={() => rightAnswersCounter(1)}></button>
      </div>

    </div>
  );
}

export default App;
