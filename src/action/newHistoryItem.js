import { writeHistoryItem } from "../store/reducers/historyArray/historyArray";

export const newHistoryItem = (newItem) => {
    return dispatch => {
        dispatch(writeHistoryItem(newItem))
    }
}