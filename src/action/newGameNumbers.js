import { writeNewGameNumbers } from "../store/reducers/gameNumbers/gameNumbers"

export const newGameNumbersItem = (newNumber) => {
    return dispatch => {
        dispatch(writeNewGameNumbers(newNumber))
    }
}