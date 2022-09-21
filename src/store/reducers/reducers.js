import { setNumbers } from "./gameNumbers/gameNumbers";
import { setHistory } from "./historyArray/historyArray";
import { setRightAnswers } from "./rightAnswersCounter/rightAnswersCounter";

export const objReducers = {
    setHistory: setHistory,
    setNumbers: setNumbers,
    setRightAnswers: setRightAnswers,
}