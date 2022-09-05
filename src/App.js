import { useState } from "react";
import FieldGame from "./components/FieldGame/FieldGame";
import style from "./assets/style/style.scss";

function App() {
  const [value, setValue] = useState(0);
  const counterClick = (val) => {
    setValue(Number(value) + Number(val))
    console.log(value)
  }

  return (
    <div className="App">
      <h1 className={style.h1}>Memory-game</h1>
      <FieldGame name="пока" counterClick={counterClick}/>
      <div>{value % 2 === 0 ? value : ''}</div>
    </div>
  );
}

export default App;
