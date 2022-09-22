import { setNewGameNumbers } from "./gameNumbers/gameNumbers";
import { setNewHistoryItem } from "./historyArray/historyArray";
import { setNewRightCount } from "./rightAnswersCounter/rightAnswersCounter";
import { setNewWrongCount } from "./wrongAnswersCounter/wrongAnswersCounter";

export const objReducers = {
    setNewHistoryItem: setNewHistoryItem,
    setNewGameNumbers: setNewGameNumbers,
    setNewRightCount: setNewRightCount,
    setNewWrongCount: setNewWrongCount
}