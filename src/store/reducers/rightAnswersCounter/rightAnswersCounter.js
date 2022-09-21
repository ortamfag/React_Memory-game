const defaultState = {
    counterRightAnswers: 0
}

const SET_RIGHT_ANSWERS = 'SET_RIGHT_ANSWERS';

export const setRightAnswers = (state = defaultState, action) => {
    switch (action.type) {
        case SET_RIGHT_ANSWERS: 
            return {...state, counterRightAnswers: action.payload};
        
        default: 
            return state;
    }
}

export const setCounterRightAnswers = (payload) => ({type: SET_RIGHT_ANSWERS, payload})