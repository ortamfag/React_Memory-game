import { setCounterRightAnswers } from "../store/reducers/rightAnswersCounter/rightAnswersCounter";

export const newRightAnswers = (newCount) => {
    return dispatch => {
        dispatch(setCounterRightAnswers(newCount))
    }
}