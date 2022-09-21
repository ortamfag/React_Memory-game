import { writeNewNumbers } from "../store/reducers/gameNumbers/gameNumbers"

export const newNumbersItem = (newNumber) => {
    return dispatch => {
        dispatch(writeNewNumbers(newNumber))
    }
}