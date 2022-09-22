import { setNumbers } from "./gameNumbers/gameNumbers";
import { setHistory } from "./historyArray/historyArray";
import { setRightAnswers } from "./rightAnswersCounter/rightAnswersCounter";
import { setWrongAnswers } from "./wrongAnswersCounter/wrongAnswersCounter";

export const objReducers = {
    setHistory: setHistory,
    setNumbers: setNumbers,
    setRightAnswers: setRightAnswers,
    setWrongAnswers: setWrongAnswers
}