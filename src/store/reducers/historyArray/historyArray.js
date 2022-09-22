const defaultState = {
    historyNumberArr: []
}

const SET_HISTORY_CLICK = 'SET_HISTORY_CLICK';

export const setNewHistoryItem = (state = defaultState, action) => {
    switch (action.type) {
        case SET_HISTORY_CLICK: 
            return {...state, historyNumberArr: action.payload};
        
        default: 
            return state;
    }
}

export const writeHistoryItem = (payload) => ({type: SET_HISTORY_CLICK, payload})