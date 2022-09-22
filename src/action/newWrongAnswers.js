import { setCounterWrongAnswers } from "../store/reducers/rightAnswersCounter/WrongAnswersCounter";

export const newWrongAnswers = (newCount) => {
    return dispatch => {
        dispatch(setCounterWrongAnswers(newCount))
    }
}