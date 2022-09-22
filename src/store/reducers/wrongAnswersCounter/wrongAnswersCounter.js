const defaultState = {
    counterWrongAnswers: 0
}

const SET_WRONG_ANSWERS = 'SET_WRONG_ANSWERS';

export const setWrongAnswers = (state = defaultState, action) => {
    switch (action.type) {
        case SET_WRONG_ANSWERS: 
            return {...state, counterWrongAnswers: action.payload};
        
        default: 
            return state;
    }
}

export const setCounterWrongAnswers = (payload) => ({type: SET_WRONG_ANSWERS, payload})